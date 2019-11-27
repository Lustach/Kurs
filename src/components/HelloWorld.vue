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
              <v-btn large color="primary">Найти</v-btn>
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
    <v-flex xs7>
      <v-layout>
        <v-row>
      <v-col v-for="(item,i) in queue" :key="i" sm="1">
        <v-card
          class="mx-auto"
          max-width="120"
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
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    value: '',
    queue : [11,2,3,4,5,6,7,8],
    text: [],
    text1:[1,2,3,4,5,6],
  }),
  methods: {
    Add(){
      if(this.value!='')
        this.queue.push(this.value)
        console.log(this.queue.indexOf())


    },
    Delete(){
      this.queue.shift()
    },
    Found(){

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

    reader.onload = e => this.text=e.target.result
    reader.readAsText(file)
  }
}
};
</script>
