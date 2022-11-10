import React from 'react';
import './App.css';
import SwaggerEditor, {plugins} from 'swagger-editor';
import 'swagger-editor/dist/swagger-editor.css';
import YAML from 'yaml'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.saveContent = this.saveContent.bind(this);
  }

  componentDidMount() {
    this.edit()
  }

  edit = () =>{
    window.editor = SwaggerEditor({
      dom_id: '#swagger-editor',
      layout: 'EditorLayout',
     
      swagger2GeneratorUrl: 'https://generator.swagger.io/api/swagger.json',
      oas3GeneratorUrl: 'https://generator3.swagger.io/openapi.json',
      swagger2ConverterUrl: 'https://converter.swagger.io/api/convert',
      
  });
  }

  saveContent() {
    const content = window.localStorage.getItem('swagger-editor-content');
    var yaml = require('js-yaml'),
    obj = yaml.load(content);
    console.log(JSON.stringify(obj, null, 2));
  }

   async loadContent(){
      await axios.get('http://192.168.2.241:9000/swagger/swagger.json')
                  .then(res => {
                    let data = res.data;
                    window.localStorage.setItem('swagger-editor-content',YAML.stringify(data));
                    window.editor = SwaggerEditor({
                      dom_id: '#swagger-editor',
                      layout: 'EditorLayout',
                     
                      swagger2GeneratorUrl: 'https://generator.swagger.io/api/swagger.json',
                      oas3GeneratorUrl: 'https://generator3.swagger.io/openapi.json',
                      swagger2ConverterUrl: 'https://converter.swagger.io/api/convert',
                      
                  });
                })
    
  }

  render() {
    return (
      <div>
        <div variant="contained" color="primary" onClick={this.saveContent}>
          Save Content
        </div>
        <div variant="contained" color="primary" onClick={this.loadContent}>
          load Content
        </div>
        <div id='swagger-editor'></div>
      </div>
    );
  }
}

export default App;