// A.	Problem Solving (30’)
// 1.	Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia. Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].

// function check(a, b) {
//     let res = A1.concat(A2)
//     let res2 =[]
//     let res3 = []
//     let check = []
//     for (let i = 0; i < res.length; i++) {
//         let count = 0
//         for(let j = i+1 ; j < res.length ; j++){
//             if(res[j]==res[i]){
//                 count += 1
//                 check.push(res[j])
//             }
//         }
//         if(count == 0){
//             res2.push(res[i])
//             // res.splice(res[j])
//         }
//     }
//     for(let i = res2.length-1 ; i >=0 ; i --){
//         let x = 0
//         for(let j = 0 ; j < check.length; j++){
//             if(res2[i] == check[j]){
//                 x=1
//             }
//         }
//         if(x==0){
//             res3.push(res2[i])
//         }
//     }
//     console.log(res3)
// }

// let A1 = [1, 2, "a"]
// let A2 = [1, 3, "b"]

// check(A1, A2)

// 2.	Viết chương trình xếp hạng rank theo số điểm các đội bóng đạt được trong giải đấu. Biết rằng tên của các đội bóng không thể trùng nhau, nếu số điểm trùng nhau thì xếp đội xếp trên có hiệu số bàn thắng bại (GD: Goal Difference) ít hơn, rồi mới xét đến Alphabet nếu 2 đội trùng cả điểm số lẫn hiệu số bàn thắng.

// let res=[
//     {
//         name:"Arsenal",
//         points:99,
//         GD:45
//     },
//     {
//         name:"Chelsea",
//         points:75,
//         GD:39
//     },
//     {
//         name:"Manchester United",
//         points:60,
//         GD:29
//     },
//     {
//         name:"Liverpool",
//         points:88,
//         GD:39
//     },
// ]
// let pointscom=res.map(x=>{return x.points})
// pointscom.sort()
// let pointsco=[]
// for(let i=pointscom.length-1;i>-1;i--){
//     pointsco.push(pointscom[i])
// }
// console.log(pointsco)
// for(let i=0; i<res.length;i++){
//     res[i].position=pointsco.indexOf(res[i].points)+1
// }
// console.log(res)