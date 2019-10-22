<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select class="form-control" name="selectAnimation" id="selectAnimation" v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">  <!-- Dynamic Class  -->
                    <div v-show="show" class="alert alert-info">This is some Info</div>                
                </transition>
                <transition name="slide" type="animation" appear="">  <!-- untuk mengurutkan animasi pakai appear -->
                    <div v-if="show" class="alert alert-info">This is some Info</div>                
                </transition>
                <transition 
                    appear=""
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    >   <!-- Using another class in transition -->
                    <div v-if="show" class="alert alert-info">This is some Info</div>                
                </transition>
                <transition :name="alertAnimation" mode="out-in">  // Dynamic Class 
                    <div v-if="show" key="info" class="alert alert-info">This is some Info</div>            <!-- Multiple Animation -->                
                    <div class="alert alert-warning" key="warning" v-else >This is some Warning</div>                
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br> <br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">
                    <div style="width:300px; height:100px; background-color:lightgreen;" v-if="load"></div>
                </transition>
                <hr>
                <br>
                <button class="btn btn-primary"
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent='app-danger-alert': selectedComponent = 'app-success-alert' ">
                    Toogle Components</button>
                <br><br>

                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>     <!-- Animating Dynamic Component -->
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br> <br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li 
                            @click="removeItem(index)" 
                            class="list-group-item" 
                            v-for="(item, index) in numbers" 
                            :key="index"
                            style="cursor:pointer">{{ item }}
                        </li>
                    </transition-group>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
import DangertAlert from './DangerAlert.vue';
import SuccessAlert from './SuccesAlert.vue';

    export default {
        data() {
            return {
                show : true,
                load : true,
                alertAnimation : 'fade',
                elementWidth : 100,
                selectedComponent : 'app-success-alert',
                numbers : [1,2,3,4,5],
            }
        },
        methods:{
            beforeEnter: (el) => {
                console.log('Before Enter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth+'px';
            },
            enter(el,done){
                console.log('Enter');
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = (this.elementWidth + round * 10)+'px';
                    round++;
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                },20);
            },
            afterEnter(el){
                console.log('After Enter');
            },
            enterCancelled(el){
                console.log('Enter Cancelled');
            },
            beforeLeave(el){
                console.log('Before Leave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth+'px';
            },
            leave(el,done){
                console.log('Leave');
                const interval = setInterval(()=>{
                    el.style.width = (this.elementWidth - round * 10)+'px';
                    round++;
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                },20);
            },
            afterLeave(el){
                console.log('After Leave');
            },
            leaveCancelled(el){
                console.log('Leave Cancelled');
            },
            addItem(){
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos,0,this.numbers.length + 1);
            },
            removeItem(index){
                this.numbers.splice(index,1);
            }
        },
        components:{
            appDangerAlert: DangertAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter{
        opacity: 0;
    }

    .fade-enter-active{
        transition: opacity 1s;
    }

    

    .fade-leave-active{
        transition: opacity 1s ;
        opacity: 0;
    }

   

    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
    }

    
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s ;
        opacity: 0;
        position: absolute;
    }

    .slide-move{
        transition: transform 1s;
    }  

    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }to{
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from{
            transform: translateX(0);
        }to{
            transform: translateY(20px);
        }
    }
</style>
