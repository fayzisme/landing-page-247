<template>
    <v-card style="min-height: 500px; margin-top: 50px;">
      <v-toolbar
        flat
        style="background-color: #404775;"
        dark
      >
        <v-toolbar-title>{{ titleBoard }}</v-toolbar-title>
      </v-toolbar>
      <v-tabs v-model="activeTab" vertical>
        <v-tab :href="`#tab1`" ref="tab1" :disabled="disabled1">
          Step - 1
        </v-tab>
        <v-tab :href="`#tab2`" ref="tab2" :disabled="disabled2">
          Step - 2
        </v-tab>
        <v-tab :href="`#tab3`" ref="tab3" :disabled="disabled3">
          Step - 3
        </v-tab>
        <v-tab-item value="tab1">
                  <v-card
                      flat
                      color="transparent"
                  >
                      <v-card-text>
                      <v-row>
                          <v-col class="px-4" style="padding-top: 50px;">
                              <v-slider
                                  v-model="number"
                                  class="align-center"
                                  label="Number 0 - 10000:"
                                  :max="10000"
                                  :min="0"
                                  color="primary"
                                  thumb-label
                              >
                                  <template v-slot:append>
                                  <v-text-field
                                      v-model="number"
                                      class="mt-0 pt-0"
                                      hide-details
                                      single-line
                                      type="number"
                                      :max="10000"
                                      :min="0"
                                      style="width: 60px; position: relative; top: -25px;"
                                  ></v-text-field>
                                  </template>
                              </v-slider>
                          </v-col>
                      </v-row>
                      <v-row>
                          <v-col style="text-align: center;">
                              <v-avatar class="circle">
                                  <span class="circle-content">{{ number }}</span>
                              </v-avatar>
                          </v-col>
                      </v-row>
                      </v-card-text>
                      <v-card-actions style="justify-content: flex-end; margin-bottom: 10px; padding: 20px;">
                          <v-btn
                              color="board"
                              @click="handleNext"
                              style="color: white; padding: 20px;"
                              :disabled="number > 0 ? false : true"
                          >
                              Lanjut
                          </v-btn>
                      </v-card-actions>
                  </v-card>
              </v-tab-item>
              <v-tab-item value="tab2">
                <v-card flat>
                  <v-card-text>
                    <v-row>
                        <v-col>
                            <h3>Click the following button to generate a table containing random integers ranging from <span style="color: #171b34;">-1000000</span> to <span style="color: #171b34;">1000000</span> with the number of columns as many as the number previously selected <span style="color: #119DA4;">({{ number }})</span></h3>
                            <v-btn
                              color="primary"
                              @click="clickGenerate"
                              style="color: white; padding: 10px; margin-top: 10px;"
                            >
                                Generate
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row v-if="table" style="height: 400px; max-height: 400px; padding: 10px; border: 1px solid #171b34; overflow: auto;">
                        <v-col class="column" v-for="(numb, key) in numbers"
                        :key="key" cols="2" lg="2" md="2" sm="6" :style="dynamicColor(numb)">{{ numb }}</v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions v-if="isGenerated" style="margin-bottom: 10px; padding: 20px;" :style="dynamicStyles()">
                          <v-btn
                              v-if="isBack"
                              color="grey"
                              @click="handleBack"
                              style="color: white; padding: 20px;"
                           >
                              Back
                          </v-btn>
                          <v-btn
                              color="board"
                              @click="handleNext"
                              style="color: white; padding: 20px;"
                              :disabled="!isGenerated"
                          >
                              Next
                          </v-btn>
                      </v-card-actions>
                </v-card>
              </v-tab-item>
              <v-tab-item value="tab3">
                <v-card flat>
                  <v-card-text>
                    <v-row style="height: 400px;">
                        <v-col>
                            <h2>Here are the smallest positive integers found in the previous table : <span style="color: #171b34;">{{ posNumbers[0] }}</span></h2>
                            <br>
                            <h3>Click the following button to show the number below the smallest number that is not in the table.</h3>
                            <v-btn
                              color="primary"
                              @click="show = !show"
                              style="color: white; padding: 10px; margin-top: 10px;"
                            >
                                {{ show ? 'Hidden' : 'Show' }}
                            </v-btn>
                            <div v-if="show" style="display: block; width: 100%; text-align: center; padding-top: 100px;"><span style="color: #119DA4; font-size: 5em;">{{ (posNumbers[0] - 1) }}</span></div>
                        </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions v-if="show" style="margin-bottom: 10px; padding: 20px; justify-content: flex-start;">
                          <v-btn
                              v-if="isBack"
                              color="grey"
                              @click="handleBack"
                              style="color: white; padding: 20px;"
                           >
                              Back
                          </v-btn>
                      </v-card-actions>
                </v-card>
              </v-tab-item>
      </v-tabs>
    </v-card>
  </template>

<script>
export default {
  name: "Papan",
  data() {
    //
    return {
      activeTab: "tab1",
      disabled1: false,
      disabled2: true,
      disabled3: true,
      number: 0,
      table: false,
      numbers: [],
      posNumbers: [],
      isBack: false,
      isGenerated: false,
      show: false,
      titleBoard: "Select a number between 0 and 10000"
    };
  },
  props: {
  },
  methods: {
    dynamicStyles() {
      return {
        'justify-content': this.isBack ? 'space-between' : 'flex-end'
      };
    },
    dynamicColor(number) {
      return {
        'color': number > 0 ? '#171b34' : 'inherit'
      };
    },
    clickGenerate(){
        this.table = true
        const min = -1000000;
        const max = 1000000;

        this.numbers = []

        for (let index = 1; index <= this.number; index++) {
            
            this.numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
            
        }

        this.numbers.sort((a, b) => a - b);

        this.isGenerated = true
    },
    handleNext(){
        switch (this.activeTab) {
            case "tab1":
                this.titleBoard = "Select a number between 0 and 10000"
                this.disabled2 = false
                this.activeTab = "tab2"
                this.disabled1 = true
                break;
            case "tab2":
                this.titleBoard = "Smallest Number"
                this.disabled3 = false
                this.activeTab = "tab3"
                this.disabled2 = true
                this.isBack = true

                this.posNumbers = this.numbers.filter(el => el > 0);

                break;
        }
    },
    handleBack(){
        switch (this.activeTab) {
            case "tab2":
                this.titleBoard = "Generate Table"
                this.disabled2 = true
                this.activeTab = "tab1"
                this.disabled1 = false
                break;
            case "tab3":
                this.titleBoard = "Smallest Number"
                this.disabled3 = true
                this.activeTab = "tab2"
                this.disabled2 = false
                break;
        }
    }
  }
};
</script>
<style scoped>
.v-tab--active{
    color: #404775;
}

.circle {
  width: 300px !important;
  height: 300px !important;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  background-color: #119da4 !important; /* Sesuaikan warna latar belakang */
  
}

.column{
    border: 1px solid #119da4;
}
.circle-content {
color: white !important;
    font-size: 100px;
  display: inline-block;
  vertical-align: middle;
}
</style>

<style>
.v-tabs-slider{
    background-color: #404775 !important;
}


</style>