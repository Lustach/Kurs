<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-row>
          <v-col sm="2">
            <v-text-field label="Добавить" single-line solo v-model="value" @change="forCicle=true"></v-text-field>
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
              <v-btn large color="primary" @click="Sort">Отсортировать</v-btn>
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
        <!-- <v-col v-for="(item,i) in queue" :key="i" sm="1" lg="1" md="1" xl="1">
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
      </v-col> -->
              <v-col v-for="(item,i) in MyQueue.forPrint" :key="i" sm="1" lg="1" md="1" xl="1" :v-if="forCicle==true">
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
    // sort:false,
    val:true,
    state:'',
    MyQueue: '',
    forCicle:false,

  }),
  created(){
    this.MyQueue=new Queue()
    // this.MyQueue.forCicle()
    console.log(this.MyQueue,'her')
  },
  methods: {

    Add(){
      if(this.value!=''){
        // this.queue.push(this.value)
        // console.log(this.queue.indexOf())
        this.MyQueue.enqueue(parseInt(this.value)),this.value=''
      }
      else{
        this.state='Введите значение'
      }
    },
    Delete(){
      // if(this.queue.length!=0)
      //   this.queue.shift()
      // else{
      //   console.log('Удалять нечего, очередь пуста')
      // }
      // console.log(this.MyQueue.forPrint[1],127)
      // console.log(this.MyQueue.forPrint[0],128)
      // this.MyQueue.forPrint[0]='JOpajspfpj'
      this.MyQueue.forPrint.shift()
      this.MyQueue.dequeue()
    },
    Sort(){
      this.MyQueue.sorting()
  //     this.MyQueue.forPrint.sort(function(a, b) {
  // return a - b;
  //   });

    },
    Found(){
      // if(this.queue.length!=0){
      //   if(this.MyQueue.sort==true){
          
      //   }
      //   else{
      //     for (let i = 0; i < this.queue.length; i++) {
      //       if(this.queue[i]==this.value){
      //         console.log('Нашёл')
      //         this.val=false
      //         break
      //       }
      //     }
      //       if(this.val==true){
      //         console.log('Не нашёл')
      //     }
      //   }
      // }
      // else{
      //   console.log('Пустая очередь')
      // }
      if(this.MyQueue.getSize()!=0){
        if(this.MyQueue.forSorting==true){
          this.state='Индекс элемента = ' + this.MyQueue.BinarySearch(parseInt(this.value),this.MyQueue.forPrint)
          console.log('hellomom',this.MyQueue.forPrint)
          // this.MyQueue
        }
        else{
          this.state='Индекс элемента = ' + this.MyQueue.getElement(parseInt(this.value))
          
        }
      }
      else{
        this.state='Сначала добавьте!'
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
    reader.onload = e => e.target.result.split(',').forEach(element => {
      this.MyQueue.enqueue(parseInt(element))
    });
// this.MyQueue.enqueue(e.target.result.split(','))
    console.log(reader,'199')
    reader.readAsText(file)
    console.log(this.queue)
  },
  randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}



  // Create Node of LinkedList 
  
    
  // To initialize a linkedlist 

}
}
</script>
