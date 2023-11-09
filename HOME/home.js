let prev = document.getElementById('prev');
let next = document.getElementById('next');


let imageArr = [
    "https://lh3.googleusercontent.com/SHJD_aKf4NBrvxwu-YhKu9HrrLGcWrQpIBPimV3mT7YWnUj1gQUm9d1G84adc-IFHXfnlybB3ZJmmjw1-qlbnKR3Pg0yzgtxraxLnh_xknANPxADFg=w800",
    "https://lh3.googleusercontent.com/u5eUBxdTzb_d9s0EB803B_i8WEMatM3-AIlAktFaCdU7xhyTJ7KdY-Tek23AujvDvhagS5tZfPF2ciJvOKdTO_hMWQgnYeAwScWh5rEG_Uu7X7kJq-c=w800",
    "https://lh3.googleusercontent.com/mgBuZGnPUR0v7GDebOS5EJTiJTRYvQhCF0tUJAfSLQSKDmKKYp4Ml9_lWb5h1-wglXsS87XvfS7-jknC71fhpAGRDNmgV7tonrWPu-N94nDqpml0Ryo=w800",
    "https://lh3.googleusercontent.com/a7GC7nb8HjZrKhUh01KOdJHE1i_yvX2FXVUFZudbrNayLJ42arNkh5lzEYp19koEiANgyA4Le7QhTwH8US9I1FueYI_N_7cu8vytIQ=w800",
    "https://lh3.googleusercontent.com/PLZzJ05tDJA-0mb8Ld1DFFJ0cw7UfSzzzrgxhPRTtqRghLwtfT8ZQC7DW23MPzdIVp2hxttNiiuXyVlTP2y0WlHumDxAwLEbSKBbcw=w800"
];


let img = document.getElementById("image")

let currentImage =0;
img.setAttribute('src',imageArr[currentImage]);

prev.addEventListener('click',function()
{
currentImage--;
if(currentImage < 0)
{
    currentImage = imageArr.length - 1;
}
img.setAttribute('src',imageArr[currentImage]);
})

next.addEventListener('click',function()
{
    currentImage++;
    if(currentImage >= imageArr.length)
    {
      currentImage = 0;
    }
    img.setAttribute('src',imageArr[currentImage]);
})

