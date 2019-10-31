// (function(){
//     var hash=function(arr){
//         var me=this;
//         me.arr=[];
//         arr.forEach(i=>{
//             me.arr.push({value:i});
//         });
//         me.createTree();
//         console.log(me)
//     };
//     hash.prototype={
//         constructor:hash,
//         createTree:function(){
//             var me=this;
//             while(me.arr.length!==1){
//                 var nodeA=me.findSmall(me.arr);
//                 var nodeB=me.findSmall(me.arr);
//                 var obj={};
//                 obj.value=nodeA.value+nodeB.value;
//                 obj.right=nodeB;
//                 obj.left=nodeA;
//                 me.arr.unshift(obj);
//             }
//         },
//         findSmall:function(arr){
//             var me=this;
//             var tem=Infinity;
//             var index=0;
//             arr.forEach((i,ind)=>{
//                 if(i.value<tem){
//                     tem=i.value;
//                     index=ind;
//                 }
//             });
//             return  arr.splice(index,1)[0];
//         }
//     };
//     new hash([2,3,5,8,9,11]);
// })();