<div id="json-formatter-app" class="box_container">
    <h1>JSON格式化</h1>
    <div>
        <textarea v-model="inputJson" placeholder="Enter JSON here..."></textarea>
        <button @click="formatJson">Format JSON</button>
        <button @click="clearJson">Clear</button>
    </div>
    <json-viewer :json="outputJson"></json-viewer>
</div>

<script setup>
import { ref } from 'vue';
import JsonViewer from './JsonViewer.vue';

const inputJson = ref('');
const outputJson = ref({});

const formatJson = () => {
    try {
        const jsonObj = JSON.parse(inputJson.value);
        outputJson.value = jsonObj;
    } catch (e) {
        outputJson.value = { error: 'Invalid JSON: ' + e.message };
    }
}

const clearJson = () => {
    inputJson.value = '';
    outputJson.value = {};
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
}

.box_container {
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
}

textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

button {
    background-color: #007BFF;
    color: white;
    padding: 10px 15px;
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}
</style>
