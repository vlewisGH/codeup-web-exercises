
function wait(timer){
    return new Promise((res,rej)=>setTimeout(()=> res(`You'll see this after ${timer/1000} seconds`),timer));
}

wait(500).then(res => console.log(res));
wait(1000).then(res => console.log(res) );
wait(3000).then(res => console.log(res));

let userName="vlewisGH";

fetch(`https://api.github.com/users/${userName}/events`,
    {'headers': {'Authorization':'0180ba5308eda3fe22bcf19feb3db47c47855368'}
    })
    .then(response => response.json())
    .then(responses => responses.filter(response => response.type==="PushEvent"))
    .then(response => console.log('your last push was:',response[0].created_at))
    .catch(() => console.log('something went wrong'));

const selectOpt = (obj) => { 
    return (
            Object.values(obj).map(val => `<option value=${val}>${val}</option>`)
    );
};


fetch('./data/profiles.json')
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
        $('#colorOptions').html(selectOpt(res))
        $('body').css("background",$('#colorOptions').val());
    })
    .catch(err => console.log('nope, not even close'));


$('#colorOptions').change(function(){
    $('body').css("background",$('#colorOptions').val());
});