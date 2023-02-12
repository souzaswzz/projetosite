function togglemode (){
    //  const html = document.documentElement
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    // html.classList.add('light')
    // }
    // podemos podemos diminuir o tamanho, não precisando usar esse if e else

    const html = document.documentElement
    html.classList.toggle('light')
}