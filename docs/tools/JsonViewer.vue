<template>
  <div class="json-viewer">
    <ul>
      {
      <li v-for="(value, key) in json" :key="key">
        <span @click="toggle(key)" class="toggle-btn">
          {{ isObject(value) ? (collapsed[key] ? '+' : '-') : '' }}
        </span>
        <span class="key">{{ key }}:</span>
        <span v-if="isObject(value) && !collapsed[key]" class="value">
          <json-viewer :json="value"></json-viewer>
        </span>
        <span v-else class="value">{{ stringify(value) }}</span>
      </li>
      }
    </ul>
  </div>
</template>

<script setup>
import {reactive} from 'vue';

const props = defineProps({
  json: {
    type: Object,
    required: true,
  },
});

const collapsed = reactive({});

const isObject = (val) => val && typeof val === 'object';

const toggle = (key) => {
  collapsed[key] = !collapsed[key];
};

const stringify = (val) => (typeof val === 'string' ? `"${val}"` : val);
</script>

<style scoped>
.json-viewer ul {
  list-style-type: none;
  padding-left: 20px;
}

.json-viewer .key {
  color: red;
}

.json-viewer .value {
  color: blue;
}

.json-viewer .toggle-btn {
  cursor: pointer;
  color: #007BFF;
  margin-right: 5px;
}
ul li{
  padding-left: 2rem;
}
</style>
