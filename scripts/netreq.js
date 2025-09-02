const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change",()=>{
    const verse = verseChoose.value;
    updateDisplay(verse);
})

function updateDisplay(verse){
    verse = verse.replace(" ","").toLowerCase();
    const url = `../sources/texts/${verse}.txt`
    // `fetch()`を呼び出し、URLを渡す
    fetch(url)
    // fetch()はプロミスを返す。サーバーからレスポンスを受けると
    // プロミスの`then()`ハンドラーがそのレスポンスと共に呼び出される
    // プロミス：時間のかかる処理が、将来完了する、という約束手形のようなもの
    .then((response)=>{
        // このハンドラーは、リクエストが成功しなかった場合にエラーを報告する
        if(!response.ok){
            throw new Error(`HTTP error:${response.status}`);
        }
        // そうでない場合(レスポンスが成功した場合)、ハンドラーは
        // response.text()を呼び出してレスポンスをテキストとして取得し、
        // 直ちに`response.text()`が返すプロミスを返す
        return response.text();
    })
    // response.text()が成功したら、そのテキストで`then()`ハンドラーが
    // 呼び出され、それを`poemDisplay`ボックスにコピーする
    .then((text)=>{
        poemDisplay.textContent = text;
    })
    // 起こりうるエラーをキャッチし、`poemDisplay`ボックスにメッセージ
    // を表示する
    .catch((error)=>{
        poemDisplay.textContent = `Could not fetch verse: ${error}`;
    });
}

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";