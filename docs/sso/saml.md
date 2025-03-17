# SAML 单点登录（SSO）指南

## 1. 什么是 SAML？

SAML（Security Assertion Markup Language）是一种基于 XML 的开放标准，用于在身份提供者（IdP）和服务提供者（SP）之间交换身份认证和授权数据。

## 2. SAML 单点登录（SSO）流程

SAML SSO 允许用户使用单个身份在多个应用程序之间进行无缝登录。典型流程如下：

| 名称  | 描述    |
|-----|-------|
| sp  | 服务提供者 |
| idp | 身份提供者 |

1. **用户访问 SP（服务提供者）**
    - 例如，用户访问 `http://loclhost:8080/user`。

2. **SP 重定向到 IdP（身份提供者）**
    - SP 生成 SAML 认证请求，并将用户重定向到 IdP（如 Okta、Keycloak、ADFS）。

3. **用户在 IdP 认证**
    - 用户输入凭据（用户名/密码、多因素认证等）。
    - 认证成功后，IdP 生成 SAML 响应。

4. **IdP 返回 SAML 响应**
    - IdP 通过浏览器 POST SAML 断言（Assertion）到 SP 预定义的 ACS（Assertion Consumer Service）URL。

5. **SP 解析 SAML 断言并创建会话**
    - SP 验证 SAML 断言的签名和有效性。
    - 解析用户信息，创建应用会话，并完成登录。

6. **用户成功访问受保护资源**
    - 认证成功后，用户可以访问 SP 的受保护页面。

## 3. Spring Security SAML2 配置
  实现sp过程,使用okta作为idp,配置如下:

### 3.1 依赖

```xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
<groupId>org.springframework.security</groupId>
<artifactId>spring-security-saml2-service-provider</artifactId>
</dependency>
```

### 3.2 Spring Security 配置

```java

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.saml2Login(Customizer.withDefaults()); // 启用 SAML 登录
        return http.build();
    }
}
```

### 3.3 `application.yml` 配置

```yaml
spring:
  security:
    saml2:
      relyingparty:
        registration:
           okta:
            assertingparty:
              metadata-uri: "https://idp.元数据.idp平台生成/metadata.xml"
```


## 4.  SAML 登录 流程

1. 访问 `http://localhost:8080/user`
2. 会经过一堆过滤器，发现未登陆以后会走到ExceptionTranslationFilter(异常拦截过滤器)
3. ExceptionTranslationFilter 发现是匿名用户，会使用DelegatingAccessDeniedHandler处理
4. DelegatingAccessDeniedHandler 又会委托authenticationEntryPoint 处理，saml会走到LoginUrlAuthenticationEntryPoint.commence处理
5. LoginUrlAuthenticationEntryPoint.commence 则会重定向到 /saml2/authenticate?registrationId={registrationId}
6.  /saml2/authenticate?registrationId={registrationId} 经过 Saml2WebSsoAuthenticationRequestFilter 过滤器，会做相关处理
7. AbstractSaml2AuthenticationRequest authenticationRequest = this.authenticationRequestResolver.resolve(request); 解析出需要请求的参数
8. 发送到 authenticationRequestUri 地址, 该地址则是idp生成的xml里的SingleSignOnService字段，也是 idp的地址
9. idp登陆认证通过后，会调用localhost:8080/login/saml2/sso/okta接口，此接口Saml2WebSsoAuthenticationFilter会去处理
10. Saml2WebSsoAuthenticationFilter 首先把saml的认证请求转化为Authentication,即spring_security的身份载体
11. BaseOpenSamlAuthenticationProvider.authenticate接口处理
12. successfulAuthentication(request, response, chain, authenticationResult); 登陆成功保存认证信息



