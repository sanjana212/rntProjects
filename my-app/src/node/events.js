const EventEmiter=require('events');
class MyEmiter extends EventEmiter {}

const myEmiter=new MyEmiter();
myEmiter.on('waterFull',()=>{
    console.log('please turn off the motor!');
    setTimeout(()=>{
        console.log('please turn off the motor gentle reminder');
    },0)
})
console.log('script is running...');
myEmiter.emit('waterFull');
console.log('script is still running');