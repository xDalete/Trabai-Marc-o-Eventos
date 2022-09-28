onpageshow = (event) => {
    console.log(event)

    document.querySelector("button").addEventListener("click", () => {
        Notification.requestPermission().then((permissao) => {
            if (permissao == "granted") { new Notification("ohhh") }
        })
    })
    let iterationCount = 0;
    addEventListener('animationstart', (event) => {
        console.log(event)
        console.log(`Animation Started`);
    });
    addEventListener('animationiteration', (event) => {
        console.log(event)
        iterationCount++;
        console.log(`Animation iteration count: ${iterationCount}`);
    });

    addEventListener('animationend', (event) => {
        console.log(event)
        console.log(`Animation ended`);
    });
    var notificacao;
    addEventListener("visibilitychange", () => {
        if (document.visibilityState == "hidden") {
            notificacao = new Notification("Volta ai!", {
                body: "pfvzinho :(",
                tag: "voltaai"
            })
        } else {
            notificacao.close();
        }
    })
}

onload = (event) => {
    console.log(event)
}
