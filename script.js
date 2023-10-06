// Web Minor Project _ Text To Emoji Encryption_Decryption _ 04 _ Sheryians

// Web Minor Project _ Text To Emoji Encryption_Decryption _ 05 _ Sheryians

// Web Minor Project _ Text To Emoji Encryption_Decryption _ 06 _ Sheryians

// Web Minor Project _ Text To Emoji Encryption_Decryption _ 07 _ Sheryians

var clutter=""

function enctyption(){
    document.querySelector('#encrypt-btn').addEventListener('click',function(){

        // getting a input
        var input = document.getElementById('textmsg').value
        // console.log(input);

        // getting a password
        var password = document.getElementById('password').value
        // console.log(password);

        // Spliting the input
        const str = input.split('')
        console.log(str);

        // converting it in an emojis
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        });
        console.log(clutter);

        // storing it in a #result div
        document.querySelector('#result').innerHTML=clutter

        var datarr = []
        if(JSON.parse(localStorage.getItem('data1'))){
            datarr = JSON.parse(localStorage.getItem('data1'))
            datarr.push({'pass':password,"input":input,'clutter':clutter})
        }else{
            datarr = [{'pass':password,"input":input,'clutter':clutter}]
        }
        localStorage.setItem('data1',JSON.stringify(datarr))
    })
}
enctyption()


function dectyption(){
    document.querySelector('#decrypt-btn').addEventListener('click',function(){
        
        var clutter2=''
        // getting an given emoji msg
        var input2=document.querySelector('#emojimsg').value

        // getting an given emoji final password
        var password2=document.querySelector('#finalpassword').value

        var user=JSON.parse(localStorage.getItem('data1'))

        var str2=input2.split('')

        str2.forEach(element =>{
            clutter2 += `&#${element.codePointAt(0)}`
        })

        for(let i of user){
            if(i.pass==password2){
                document.querySelector('#result').style.display="block"
                document.querySelector('#result').style.color="green"
                document.querySelector('#result').innerHTML=i.input
            }else{
                document.querySelector('#result').style.display="block"
                document.querySelector('#result').style.color="red"
                document.querySelector('#result').innerHTML='Wrong Password'
            }
        }
    })
}
dectyption()


function btnclicking(){
    document.querySelector('#dec-btn').addEventListener('click',function(){
        document.querySelector('#decryption').style.display='block'
        document.querySelector('#encryption').style.display='none'

        document.querySelector('#dec-btn').style.backgroundColor="#333"
        document.querySelector('#enc-btn').style.backgroundColor="#222"

        document.querySelector('#main>h1> span').style.rotate='180deg'
        document.querySelector('#result').style.display='none'
    })

    document.querySelector('#enc-btn').addEventListener('click',function(){
        document.querySelector('#encryption').style.display='block'
        document.querySelector('#decryption').style.display='none'

        document.querySelector('#enc-btn').style.backgroundColor="#333"
        document.querySelector('#dec-btn').style.backgroundColor="#222"

        document.querySelector('#main>h1> span').style.rotate='360deg'
        document.querySelector('#result').style.display='none'
    })

    document.querySelector('#encrypt-btn').addEventListener('click',function(){
        document.querySelector('#result').style.display='block'
    })

    document.querySelector('#decrypt-btn').addEventListener('click',function(){
        document.querySelector('#result').style.display='block'
    })

    
}

btnclicking()

// inside the application

// localStorage.clear()

// localStorage.setItem('user','jay')
// localStorage.setItem('age','18')

// var a = localStorage.getItem('user')
// console.log(a);

// var arr = ['jay',19,true,'lab']
// console.log(arr);
// localStorage.setItem('array',JSON.stringify(arr))

// console.log(localStorage.getItem('array'));
// console.log(JSON.parse(localStorage.getItem('array')));