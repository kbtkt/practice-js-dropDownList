let p =document.querySelector("#message");
const message0 ="選択しますと、注意事項等ご案内が表示されます";
const message01 = "テスト文1です。あいうえお";
const message02 = "テスト文2です。かきくけこ";
const message03 = "テスト文3です。さしすせそ";



const selectType = document.getElementById("type");

selectType.addEventListener( 'change',(e) => {
    let result = selectType.value;
    
    const datas={"none":message0,"transfer":message01,"newp":message02,"personal":message03};
    if(Object.keys(datas).includes(result)){
        p.textContent=datas[result];
    } 
});  

