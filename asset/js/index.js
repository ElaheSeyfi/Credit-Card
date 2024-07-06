 const input=document.querySelectorAll('.boxs>input')
        const name=document.querySelector('#name')
        const h1=document.querySelector('h1')
        const cardholder=document.querySelector('#cardholder')
        const mounth=document.querySelector('.mounth')
        const date=document.querySelector('#date')
        const expiration=document.querySelector('.expiration')
        const year=document.querySelector('#year')
        const backcard=document.querySelector('.backcard')
        const code=document.querySelector('#code')
        const cv=document.querySelector('#cv')
        const card=document.querySelector('.card')
        console.log(input)
        card.addEventListener('click',()=>{
            card.style.transform="rotateY(180deg)"
        })
        input.forEach((val,i)=>{
            val.addEventListener('input',()=>{
                console.log(val.value)
                if(val.value.length==4){
                    if(i!=3){
                        val.nextElementSibling.focus()
                    }else{
                        name.focus()
                    }
                }
                h1.innerHTML=''
                input.forEach((val,i)=>{
                    let temp=val.value
                    if(i==3){
                        h1.innerHTML+=temp
                    }else{
                        h1.innerHTML+=temp.length==4?temp+" ":temp
                    }
                    // console.log("val|"+val+"i|"+i)
                })
            })
        })
        name.addEventListener('input',(e)=>{
            if(e.target.value.length==20){
                alert('نام معتبر نیست..')
            }else{
                console.log(e.target.value)
                cardholder.innerHTML=e.target.value
            }
                
        })
        mounth.addEventListener('change',(e)=>{
            let selectvalue=e.target.value
            date.innerHTML=selectvalue
        })
        expiration.addEventListener('change',(e)=>{
            let selectvalue=e.target.value
            year.innerHTML=selectvalue
        })
        code.addEventListener('input',(e)=>{
            backcard.classList.remove('hide')
            cv.innerHTML=e.target.value
            if(e.target.value.length>4){
                alert('کد cvv2 باید 4 شماره ای باشد')
                e.target.value=e.target.value.slice(0,4)
                cv.innerHTML=e.target.value
            }
        })
        code.addEventListener('mouseout',()=>{
            backcard.classList.add('hide')
        })