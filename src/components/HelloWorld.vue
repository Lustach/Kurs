<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-row>
          <v-col sm="2">
            <v-text-field label="Добавить" single-line solo v-model="value"></v-text-field>
          </v-col>
          <v-col sm="1">
            <div class="my-1">
              <v-btn large color="primary" @click="Add">Добавить</v-btn>
            </div>
          </v-col>
          <v-col sm="1">
            <div class="my-1">
              <v-btn large color="primary" @click="Delete">Удалить</v-btn>
            </div>
          </v-col>
          <v-col sm="1">
            <div class="my-1">
              <v-btn large color="primary" @click="Found">Найти</v-btn>
            </div>
          </v-col>
          <v-col sm="2">
            <div class="my-1">
              <input type="file" @change="loadFile">
            </div>
          </v-col>
          <!-- <v-col sm="2">
            <v-text-field label="Удалить" single-line solo></v-text-field>
          </v-col>
          <v-col sm="2">
            <v-text-field label="Поиск" single-line solo></v-text-field>
          </v-col>
          <v-col sm="2">
            <input type="file" @change="loadFile">
          </v-col>
          <v-col sm="2">
            <v-text-field :label="text" v-model="text" single-line solo></v-text-field>
            {{text}}
          </v-col> -->
        </v-row>
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <v-layout justify-center text-center >
      <v-row>
        <v-col v-for="(item,i) in queue" :key="i" sm="1" lg="1" md="1" xl="1">
          <v-card
          class=""
          max-width="70"
          outlined
          elevation="5"
          >
            <v-card-text @dblclick="Delete">
              {{item}}
            </v-card-text>
          </v-card>
      </v-col>
      </v-row>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout justify-center text-center>
        <v-row>
          <v-col sm="2">
            <div class="my-1">
              <v-text-field label="Поле состояния" single-line solo v-model="state"></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import {Queue} from './index.js'
export default {
  name: "HelloWorld",

  data: () => ({
    value: '',
    queue : [],
    text: [],
    text1:[1,2,3,4,5,6],
    sort:false,
    val:true,
    state:'',
    Queue:{
      Node(data) { 
          this.node = data; 
          this.next = null; 
      },
      // LinkedList: {
      //   Init(list){
      //   this.head = list || null
      //   },
      //   insert = function(data) { 
  
      //     // Check if the linked list is empty 
      //     // so insert first node and lead head 
      //     // points to generic node 
      //     if (this.head === null) 
      //         this.head = new Node(data); 
  
      //     else { 
  
      //         // If linked list is not empty, insert the node 
      //         // at the end of the linked list 
      //         let list = this.head; 
      //         while (list.next) { 
      //             list = list.next; 
      //         } 
  
      //         // Now here list pointer points to last 
      //         // node let’s insert out new node in it 
      //         list.next = new Node(data) 
      //     } 
      //   } 
      // },
    }
  }),
  methods: {
    Add(){
      if(this.value!=''){
        this.queue.push(this.value)
        console.log(this.queue.indexOf())
      }
      else{
        console.log('Введите значение')
      }
    },
    Delete(){
      if(this.queue.length!=0)
        this.queue.shift()
      else{
        console.log('Удалять нечего, очередь пуста')
      }
    },
    Sort(){

    },
    Found(){
      if(this.queue.length!=0){
        if(this.sort){

        }
        else{
          for (let i = 0; i < this.queue.length; i++) {
            if(this.queue[i]==this.value){
              console.log('Нашёл')
              this.val=false
              break
            }
          }
            if(this.val==true){
              console.log('Не нашёл')
          }
        }
      }
      else{
        console.log('Пустая очередь')
      }
    },

  //   loadFile(e) {
  //   console.log(e.target.files)
  //   const reader = new FileReader()
  //   reader.onload =  () => {
  //     console.log(reader.result)
  //     this.text = reader.result.split('\n').map( line => {
  //       return line.split(',')
  //   })
  //   reader.readAsText(e.target.files[0])
  //     console.log(this.text)
  //   }
  // }
  loadFile(ev){
    const file = ev.target.files[0]
    const reader = new FileReader()
    reader.onload = e => this.queue=e.target.result.split(',')
    reader.readAsText(file)
    console.log(this.queue)
  },
  // Create Node of LinkedList 
  
    
  // To initialize a linkedlist 

}
}
</script>
