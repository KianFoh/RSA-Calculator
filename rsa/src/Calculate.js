
export function calculate (Text, n, e) {
    
    //Split the Text into char and store them into "text_array"
    let text_array = Text.split("");

    //Text Representation
    const Represent = {
        A : "00", B : "01", C :"02", D : "03", E : "04", F : "05",
        G : "06", H : "07", I : "08", J : "09", K : "10", L :"11",
        M : "12", N : "13", O : "14", P : "15", Q :"16", R : "17",
        S : "18", T : "19", U : "20", V : "21", W : "22", X : "23",
        Y : "24", Z : "25"
    }

    // Combined two char together array for Steps

    var text_twochar_arr = [];
    var counter = 0;
    var MS = 0;
    var LS = 1;

    while (counter < (text_array.length / 2)){
        text_twochar_arr.push((text_array[MS] + text_array[LS]))
        if (text_array[LS] == null)
            text_twochar_arr[(text_twochar_arr.length-1)] = text_twochar_arr[(text_twochar_arr.length-1)][0]
        counter += 1
        MS += 2
        LS += 2
    }
    
    
        
    

    //Convert each char in text_array to number
    text_array.forEach(Representation);

    function Representation(item, index) {
        text_array[index] = Represent[item];
    }

    //Combine and convert text_array to float
    var Num_Arr = [];
     counter = 0;
     MS = 0;
     LS = 1;

    while (counter < (text_array.length / 2)){
        if (text_array[LS] == null)
            text_array[LS] = "";
        Num_Arr.push(parseFloat(text_array[MS] + text_array[LS]))
        counter += 1
        MS += 2
        LS += 2
    }

    // Declare Num_Arr for Steps

    //Calculation
    counter = 0;
    while (counter < Num_Arr.length){
        var counter2 = 1;
        var R = Num_Arr[counter]
        var multipler = Num_Arr[counter]
        while (counter2 < e){
            R = (R * multipler) % parseFloat(n);
            counter2 += 1;
        }
        Num_Arr[counter] = String(parseInt(R))
        counter += 1
    }
    
        // remove bracket in Num_Arr 
        var final = Num_Arr.join(' ');
    return {final,text_twochar_arr}
}