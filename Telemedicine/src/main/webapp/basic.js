const option=[];
 /*fever related sympotom*/
 const fever=[];
    const question=[];
    let userdata=[];
    /*cold related symptom*/
    const cold=[];
     /*diabities related symptom*/
     const daibetes=[];
     //nutrition releted data
     const nutrition=[];
     // dermotologist related question
     const dermatology=[];
     //mental health related data
     const mental=[];
     //pridectise deases
     const pediatrics=[];
     //belove array have option value for info array
     

     const oAge=[];
    const oGender=[];
    const symptoms=[];
    const symStart=[];
    const symUp=[];
    
    //counting varable
    let count=0;
    let optionCount=0;
    let mainArrayCount=0;
    let questionCount=0;
    let optionArrCount=0;
    /*general client info*/
    const info=['What is Your Age?','What is Your Gender?','What symptoms are you Experiencing?',' When did your symptoms are start?','Have your symptoms improved, or stayed the same since they began?'];
     
    /*pushing age related option*/
    oAge.push('Below 12 Years');oAge.push('12 to 30');oAge.push('30 to 50');oAge.push('above 50');
    //pushing to main main option array
    option.push(oAge);
    //storing gender related option to option
    oGender.push('Male');oGender.push('Female');oGender.push('Transgender');oGender.push("not to mention");
     //pushing to option arr
     option.push(oGender);
     //syptom related option
     symptoms.push('Body Pains');symptoms.push('Headache and body Temp');symptoms.push('Thristy and Dry mouth');symptoms.push('All of the above');
     //pushiong to option
     option.push(symptoms);
     //age , gender ,symptop inserted in option arrays
     symStart.push('1 to 2 days before');symStart.push('3 to 5 days before');symStart.push('5 to 7 days before');symStart.push("more than one week");
     //sym start pushed to option array
     option.push(symStart);
     //pushing to symup option
     symUp.push('Improved');symUp.push('Same');symUp.push("Normal");symUp.push("Incresed");
     // symup is storing to option arraya
     option.push(symUp);
    question.push(info);
    //info arrays is stored to question arrays
    //storing dato into fever
    fever.push('What is your current body temperature?');
    fever.push('When did you first notice the fever?');
    fever.push('Has your temperature been consistently elevated, or has it fluctuated?');
    fever.push('Are you experiencing any other symptoms along with the fever, such as ');
    fever.push('Do you have any respiratory symptoms like');
    fever.push('Have you noticed any gastrointestinal symptoms like');
    fever.push('Have you recently been in contact with someone who has been diagnosed with an infectious illness?');
    fever.push('Have you taken any fever-reducing medications?');
    //sucessfully fever data is inserted and now inserting to option arrays
    
    question.push(fever);
    //arrays for fever related option
    const fever1=[];const fever2=[];const fever3=[];const fever4=[];const fever5=[];const fever6=[];
    const fever7=[];const fever8=[];
    //pushing option value
    fever1.push('92-96°C');fever1.push('97-100°C ');fever1.push('100-102°C');fever1.push('103-107°C');
    //pushing to option array
    option.push(fever1);
    //pushing to fever2 value
    fever2.push('1 day');fever2.push('2 days');fever2.push('3 days');fever2.push('more than 4 days');
    //pushing to option
    option.push(fever2);
    //pushing to fever 3
    fever3.push('Yes');fever3.push('No');fever3.push('Same');fever3.push('Undefined');
    //pushing to option
    option.push(fever3);
    //pushing to fever 4
    fever4.push('chills');fever4.push('sweating');fever4.push('headache');fever4.push('body aches');
    //pushing to option
    option.push(fever4);
    //pushing to fever 5
    fever5.push('cough');fever5.push('sore throat');fever5.push('difficulty breathing');fever5.push('lack of energy');
    option.push(fever5);
    //pushing to fever 6
    fever6.push('nausea');fever6.push('vomiting');fever6.push('diarrhea');fever6.push('dehydration');
    option.push(fever6);
    //pushing to fever 7
    fever7.push('Yes');fever7.push('No');fever7.push('maybe');fever7.push('I didn\'t remember');
    option.push(fever7);
    //pushing to fever 8
    fever8.push('Yes');fever8.push('No');fever8.push('used natural redemies');fever8.push('undefined');
    option.push(fever8);
    //fever data inserted successfully
    //inserting to cold
    cold.push('How is the current condition of your cold and cough?');cold.push('Are you experiencing any other symptoms such as');
    cold.push('How long have you had these symptoms?');cold.push('Have you experienced similar symptoms in the past?');
    cold.push('Do you have any pre-existing medical conditions, such as');cold.push('How would you describe your cough?');
    cold.push('Are you experiencing any other symptoms associated with your cough, such as');
    
    //cold data inserted sucessfully
    question.push(cold);
    //option for cold symptom
    const cold1=[];const cold2=[];const cold3=[];const cold4=[];const cold5=[];const cold6=[];const cold7=[];const cold8=[];
    cold1.push('better');cold1.push('worse ');cold1.push('staying the same');cold1.push('undefined');
    option.push(cold1);
    cold2.push('fever');cold2.push('sore throat');cold2.push('sneezing ');cold2.push('body aches');
    option.push(cold2);
    cold3.push('1 day');cold3.push('2days ');cold3.push('3 days');cold3.push('4 days');
    option.push(cold3);
    cold4.push('Yes');cold4.push('No');cold4.push('maybe');cold4.push('undefined');
    option.push(cold4);
    cold5.push('asthma');cold5.push('allergies');cold5.push('chronic obstructive pulmonary disease (COPD)');cold5.push('headache');
    option.push(cold5);
    cold6.push('Dry or Non-productive Cough');cold6.push('Wet or Productive Cough');cold6.push('Barking Cough');cold6.push('Hacking Cough');
    option.push(cold6);
    cold7.push('chest pain');cold7.push('wheezing');cold7.push('shortness of breath');cold7.push('runny nose');
    option.push(cold7);
    
    //pushing daibetes data
    daibetes.push('When were you diagnosed with diabetes?');daibetes.push('What type of diabetes do you have?');daibetes.push('What medications are you currently taking for diabetes');
    daibetes.push('Are you following any specific dietary plan or meal schedule to manage your blood sugar levels?');
    daibetes.push('How often do you engage in physical activity or exercise?');daibetes.push('Are you experiencing any symptoms related to diabetes, such as ');
    daibetes.push('Do you smoke or consume alcohol?');daibetes.push('Are you taking your diabetes medications as prescribed, including insulin injections or oral medications?');
    //creation option for daibetes
    const dai1=[];const dai2=[];const dai3=[];const dai4=[];const dai5=[];const dai6=[];const dai7=[];const dai8=[];
    dai1.push('10days');dai1.push('more than 20 days');dai1.push('more than 1 month');dai1.push('more than 3 months');
    option.push(dai1);
    dai2.push('type 1');dai2.push('type 2');dai2.push('MODY');dai2.push('LADA');
    option.push(dai2);
    dai3.push('insulin');dai3.push('oral medications');dai3.push('injectables');dai3.push('diet and exercise');
    option.push(dai3);
    dai4.push('Yes ');dai4.push('No');dai4.push('maybe');dai4.push('undefined');
    option.push(dai4);
    dai5.push('Everyday');dai5.push('Weekly twice');dai5.push('Rarely ');dai5.push('Never done');
    option.push(dai5);
    dai6.push('increased thrust');dai6.push('frequent urination');dai6.push('fatigue');dai6.push('blurred vision');
    option.push(dai6);
    dai7.push('Yes');dai7.push('No');dai7.push('rare');dai7.push('sometimes');
    option.push(dai7);
    dai8.push('Yes');dai8.push('No');dai8.push('weekly once');dai8.push('sometimes');
    option.push(dai8);
    question.push(daibetes);
    //pushing nutrition data
    nutrition.push('How often do you eat meals throughout the day?');
    nutrition.push('What types of foods do you regularly consume?');
    nutrition.push('Do you have any specific dietary preferences or restrictions, such as ');
    nutrition.push('How much water do you typically drink in a day?');
    nutrition.push('Do you consume other beverages besides water, such as');
    nutrition.push('Are you experiencing any symptoms of dehydration, such as');
    nutrition.push('Do you have any pre-existing medical conditions that may impact your dietary needs or restrictions, such as diabetes, ');
    nutrition.push('Are you currently taking any medications or supplements that may affect your appetite, metabolism, or nutrient absorption?');
    nutrition.push('Do you follow physical activity or excercise routine?');
    nutrition.push('Are you currently trying to ');
    nutrition.push('What do yo prefer');
    question.push(nutrition);
    //nutrition releted option
    const nut1=[];const nut2=[];const nut3=[];const nut4=[];const nut5=[];const nut6=[];
    const nut7=[];const nut8=[];const nut9=[];const nut10=[];const nut11=[];
    nut1.push('Once ');nut1.push('twice');nut1.push('thrice');nut1.push('4times');
    option.push(nut1);
    nut2.push('healthy');nut2.push('junk food');nut2.push('sometimes healthy');nut2.push('sometimes junk food');
option.push(nut2);
nut3.push('vegetrarianism');nut3.push('veganism');nut3.push('gluten free');nut3.push('dairy free');
option.push(nut3);
nut4.push('< 1liter');nut4.push('1-2 liters');nut4.push('3-4 liters');nut4.push('more than 4 liters');
option.push(nut4);
nut5.push('coffee');nut5.push('tea');nut5.push('soda');nut5.push('juice');
option.push(nut5);
nut6.push('thristy');nut6.push('dry mouth');nut6.push('dark urine');nut6.push('feeling tired');
option.push(nut6);
nut7.push('high blood pressure');nut7.push('food allergies');nut7.push('gastrointestinal disorders');nut7.push('weakness');
option.push(nut7);
nut8.push('yes');nut8.push('no');nut8.push('sometimes');nut8.push('never');
option.push(nut8);
nut9.push('everyday');nut9.push('twice');nut9.push('a week');nut9.push('rarely');
option.push(nut9);
nut10.push('lose weight');nut10.push('gain weight');nut10.push('maintain your current weight');nut10.push('undefined');
option.push(nut10);
nut11.push('home food');nut11.push('junk food');nut11.push('non-vegetrarian');nut11.push('vegetrarian');
option.push(nut11);
//dermatology related data
dermatology.push('What skin symptoms you are experiencing such as');
dermatology.push('When did you first notice these symptoms?');
dermatology.push('Have the symptoms changed in apperance?');
dermatology.push('Are the symptoms localized at');
dermatology.push('Are you exposed to any potential irritants or allergens in your environment, such as ');
dermatology.push('Do you have any hobbies or activities that involve prolonged sun exposure, such as outdoor sports or gardening?');
dermatology.push('Have you made any recent changes to your skincare routine, diet, or lifestyle that may be contributing to your skin symptoms?');
dermatology.push('Are there any genetic factors or family patterns of skin conditions that may be relevant to your symptoms?');
dermatology.push('Are you experiencing any discomfort or pain associated with your skin symptoms?');
dermatology.push('Have you noticed any changes in your overall health or well-being that may be related to your skin condition?')
question.push(dermatology);
//enter all question then for option
const der1=[];const der2=[];const der3=[];const der4=[];const der5=[];
const der6=[];const der7=[];const der8=[];const der9=[];const der10=[];
//pushing option data
der1.push('rash');der1.push('redness');der1.push('itching');der1.push('lesions');
option.push(der1);
der2.push('> than month');der2.push('from 2months');der2.push('from 3months');der2.push('from 6months');
option.push(der2);
der3.push('yes');der3.push('no');der3.push('same');der3.push('undefined');
option.push(der3);
der4.push('specific areas of body');der4.push('multiple areas of body');der3.push('only on face');der4.push('undefined');
option.push(der4);
der5.push('chemicals');der5.push('fragrances');der5.push('occupational hazards');der5.push('undefined');
option.push(der5);
der6.push('yes');der6.push('no');der6.push('sometimes');der6.push('rarely');
option.push(der6);
der7.push('yes');der7.push('no');der7.push('maybe');der7.push('undefined');
option.push(der7);
der8.push('yes');der8.push('no');der8.push('maybe');der8.push('undefined');
option.push(der8);
der9.push('yes');der9.push('no');der9.push('sometimes');der9.push('rarely');
option.push(der9);
der10.push('yes');der10.push('no');der10.push('sometimes');der10.push('undefined');
option.push(der10);
//mental related question here
mental.push('Have you noticed any changes in your mood such as feeling more down or irritable than usual?');
mental.push('Are you experiencing any symptoms such as');
mental.push('Have you been experiencing changes in your sleep patterns, appetite, energy levels, or concentration?');
mental.push('Are you having any intrusive thoughts, worries, or fears that are difficult to control?');
mental.push('Do you have a support system of friends, family, or loved ones you can rely on?');
mental.push('Are you experiencing any conflicts or difficulties in your relationships that may be contributing to your mental health concerns?');
mental.push('Have you been having thoughts of harming yourself or ending your life?');
mental.push('Have you made any suicide attempts or engaged in self-harming behaviors in the past?');
mental.push('Are your mental health symptoms impacting your ability to function in daily life, such as work, school, relationships, or self-care activities?');
mental.push('Have you noticed any changes in your motivation, interest in activities, or sense of enjoyment in things you used to find pleasurable?');
//afeter entered all related question
question.push(mental);
//mental health option 
const men1=[];const men2=[];const men3=[];const men4=[];const men5=[];
const men6=[];const men7=[];const men8=[];const men9=[];const men10=[];
//enter option here
men1.push('yes');men1.push('no');men1.push('sometimes');men1.push('rarely');
option.push(men1);
men2.push('anxiety');men2.push('depression');men2.push('mood swings');men2.push('other mental conditions');
option.push(men2);
men3.push('yes');men3.push('no');men3.push('sometimes');men3.push('rarely');
option.push(men3);
men4.push('yes');men4.push('no');men4.push('sometimes');men4.push('rarely');
option.push(men4);
men5.push('yes');men5.push('no');men5.push('sometimes');men5.push('rarely');
option.push(men5);
men6.push('yes');men6.push('no');men6.push('sometimes');men6.push('rarely');
option.push(men6);
men7.push('yes');men7.push('no');men7.push('sometimes');men7.push('rarely');
option.push(men7);
men8.push('yes');men8.push('no');men8.push('sometimes');men8.push('rarely');
option.push(men8);
men9.push('yes');men9.push('no');men9.push('sometimes');men9.push('rarely');
option.push(men9);
men10.push('yes');men10.push('no');men10.push('sometimes');men10.push('rarely');
option.push(men10);
//pushing data to pridectise


//after pushing all question
pediatrics.push('how was your child been feeling lately?');
pediatrics.push('Any recent illnesses like');
pediatrics.push('How is your childs appetite?');
pediatrics.push('How is your childs sleep pattern?');
pediatrics.push('How many hours of sleep does your child get at night?');
pediatrics.push('Is your child meeting development milestone appropriate for their age?');
pediatrics.push('How much physical activity does your child get each day?');
pediatrics.push('Is your child currently taking any medications?');
pediatrics.push('How is your childs behaviour at home?');

pediatrics.push('How much screen time does your child have daily?');
question.push(pediatrics);
const ped1=[];const ped2=[];const ped3=[];const ped4=[];const ped5=[];
const ped6=[];const ped7=[];const ped8=[];const ped9=[];const ped10=[];
//pushing option
ped1.push('complaints of discomfort');ped1.push('unusual symptoms');ped1.push('change in behaviour');ped1.push('change in energy levels');
option.push(ped1);
ped2.push('fever and cough');ped2.push('runny nose');ped2.push('vomiting and diarrhea');ped2.push('weight loss');
option.push(ped2);
ped3.push('average');ped3.push('below average');ped3.push('good');ped3.push('bad');
option.push(ped3);
ped4.push('average');ped4.push('below average');ped4.push('good');ped4.push('bad');
option.push(ped4);
ped5.push('10hrs');ped5.push('8hrs');ped5.push('6hrs');ped5.push('4hrs');
option.push(ped5);
ped6.push('yes');ped6.push('no');ped6.push('maybe');ped6.push('undefined');
option.push(ped6);
ped7.push('30mins');ped7.push('1hr');ped7.push('2hrs');ped7.push('3hrs');
option.push(ped7);
ped8.push('yes');ped8.push('no');ped8.push('sometimes');ped8.push('rarely');
option.push(ped8);
ped9.push('energetic');ped9.push('hyperactive');ped9.push('moody');ped9.push('silent');
option.push(ped9);
ped10.push('1hr');ped10.push('2-3hrs');ped10.push('3-4hrs');ped10.push('more than 4hrs');
option.push(ped10);


    function valid(){
        
      
        
        //retriving radio value data and storing to userdata
       
       radioChecked();
       
       document.getElementById('question');
       //document.body.style.background="pink";
       document.getElementById('question').innerHTML=questionFun(mainArray());
       common();
          }
    let dia=20;
    let diacount=0;
    function diabities(){
        if(diacount<question[3].length){
            radioChecked();
        document.getElementById('question').innerHTML=questionFun(question[3]);
        optionArrCount=dia;
        dia++;
common();
        }
        else{
            dia=20;
            delElement();
            setResponce('Please follow below steps to control your diabetes...','h2');
            let msg='By analysing your responses, Your health is absoultely fine. Check your blood sugar levels. Monitoring helps you understand how your lifestyle choices, medications, and other factors affect your blood sugar levels. Eat a healthy, well-balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Focus on portion control and carbohydrate counting. Minimize your intake of sugary beverages, sweets, and processed foods that can cause spikes in blood sugar levels. Choose whole, unprocessed foods whenever possible. Drink plenty of water throughout the day to stay hydrated. Limit sugary drinks and alcohol. Aim for at least 150 minutes of moderate-intensity aerobic exercise per week, such as brisk walking, cycling, or swimming. Exercise helps lower blood sugar levels, improve insulin sensitivity, and support overall health.';
            setResponce(msg);
            setResponce('Food :');
            let msg1='Whole grains (brown rice, quinoa, barley, oats), legumes (beans, lentils, chickpeas), non-starchy vegetables (leafy greens, broccoli, cauliflower), and fruits with lower GI (berries, apples, citrus fruits),Skinless poultry, fish (such as salmon or trout), lean cuts of beef or pork, tofu, tempeh, eggs, low-fat dairy products (such as Greek yogurt or cottage cheese), Avocado, nuts (almonds, walnuts, pistachios), seeds (chia seeds, flaxseeds, pumpkin seeds),'
            setResponce(msg1);
        return;
            
        }
        diacount++;

    }
    //function for fever
    let f=5;
    function fevers(){
        if(diacount<question[1].length){
            radioChecked();
        document.getElementById('question').innerHTML=questionFun(question[1]);
        optionArrCount=f;
        f++;
common();
        }
        else{
            f=5;
            delElement();
            setResponce('You suffering from fever follow below tips to reduce it,','h2');
            let msg='By analysing your responses, Your health is absoultely fine. Drink plenty of fluids to stay hyderated. Resting hepls your body recover fastly. Use lukewarm sponge baths or cool compresses to help reduce body temperature. Moniter your temperature reguraly. Use "Paracetamol (Acetaminophen)" twice a day after breakfast and dinner, it hepls to reduce the temperature. Food(Clear Liquids,Soups,Fruits,Vegetables,Plain Crackers or Toast,Rice and Pasta,Yogurt,Ginger and Herbal Teas) Avoid heavy, greasy, spicy, or overly processed foods.';
            setResponce(msg);
            return;
        }
        diacount++;

    }
    /*function for selection questio from array*/
    //function for cold
    let c=13;
    function colds(){
        if(diacount<question[2].length){
            radioChecked();
        document.getElementById('question').innerHTML=questionFun(question[2]);
        
        optionArrCount=c;
        c++;
        common();
        }
        else{
            c=13;
            delElement();
            setResponce('Follow below instruction to overcome from Cold','h2');
            let msg1='By analysing your responses, Your health is absoultely fine. Drink plenty of fluids to stay hyderated.Get adequate rest to support the bodys immune response. Use saline nasal sprays or steam inhalation to help alleviate nasal congestion. Gargling with warm salt water or use throat lozenges to soothe a sore throat. Use "Antihistamines" helps to reduce symptoms like sneezing, itching, and a runny nose. Use "Cough suppressants" help alleviate coughing by suppressing the cough reflex. Food(Warm Broths and Soups, Citrus Fruits, Honey, Ginger and Garlic, Hot herbals Teas, Warm milk with Tumeric, Warm Water with Lemon and Honey, Spicy foods) Avoid dairy products';  
            setResponce(msg1);
            
        return;
            
        }
        diacount++;

    }
    //function for nutritionds
    let nutCount=28;
    
   function nutritions(){
    if(diacount<question[4].length){
        radioChecked();
    document.getElementById('question').innerHTML=questionFun(question[4]);
    optionArrCount=nutCount;
    nutCount++;
    
    common();
    }
    else{
        nutCount=28;
        delElement();
        setResponce('Your body required some Nutritions to be heathy so Fellow below tips...','h2');
        let msg='By analysing your responses, Your health is absoultely fine. Follow a meal pattern like ';
        setResponce(msg);
        setResponce('Breakfast:');
        let msg1='Breakfast is often considered the most important meal of the day, providing energy to kickstart your metabolism. Aim for a balanced meal containing carbohydrates, protein, and healthy fats. Example: Whole-grain toast with avocado or nut butter, scrambled eggs or Greek yogurt with berries, and a glass of water or unsweetened tea.'
        setResponce(msg1);
        setResponce('Mid-Morning Snack (Optional):');
        let msg3='If you tend to get hungry between breakfast and lunch, a small snack can help keep your energy levels up and prevent overeating later in the day. Example: Handful of nuts, piece of fruit, or vegetable sticks with hummus.';
        setResponce(msg3,'h3');
        setResponce('Lunch:');
        let msg2='Lunch should provide a balance of nutrients to sustain energy levels throughout the afternoon. Aim for a combination of lean protein, whole grains, vegetables, and healthy fats. Example: Grilled chicken or tofu salad with mixed greens, quinoa, vegetables, and a vinaigrette dressing.';
        setResponce(msg2);
        setResponce('Afternoon Snack (Optional):');
        let msg4='If you find yourself hungry in the afternoon, a nutritious snack can help curb hunger and prevent overeating at dinner. Example: Greek yogurt with granola and berries, a small smoothie, or whole-grain crackers with cheese.';
        setResponce(msg4);
        setResponce('Dinner:');
        let msg5='Dinner is typically the largest meal of the day and should provide a balance of nutrients to fuel your body and support recovery overnight. Include lean protein, vegetables, whole grains, and healthy fats. Example: Baked salmon with roasted sweet potatoes and steamed broccoli, or whole-grain pasta with marinara sauce, lean turkey meatballs, and a side salad.';
        setResponce(msg5);
        setResponce('Evening Snack (Optional):');
        let msg6='If you feel hungry before bedtime, a light snack can help satisfy your hunger without disrupting sleep. Opt for something light and easy to digest. Example: A small bowl of mixed berries, a piece of string cheese, or a handful of air-popped popcorn. This meal pattern helps your body to maintain the correct nutrition.';
        setResponce(msg6);
    return;
        
    }
    diacount++;


   }
    //function for insert radio value
    //function for dermatology
    let d=39;
    function dermatologys(){
        if(diacount<question[5].length){
            radioChecked();
        document.getElementById('question').innerHTML=questionFun(question[5]);
        optionArrCount=d;
        d++;
        common();
        }
        else{
            d=39;
            delElement();
            setResponce('Here are some tips about dermatology...','h2');
            let msg='By analysing your responses, Your health is absoultely fine. Wear sunscreen with a broad-spectrum SPF of 30 or higher every day, even on cloudy days. Seek shade, especially during peak sun hours (10 a.m. to 4 p.m.). Wear protective clothing, such as wide-brimmed hats, sunglasses, and long sleeves. Cleanse your skin daily with a mild, fragrance-free cleanser suitable for your skin type. Moisturize regularly to keep your skin hydrated and supple, especially after bathing or showering.  Avoid harsh or abrasive skincare products that can irritate the skin.  Eat a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats to support overall skin health. Limit intake of sugary, processed foods and beverages, which can contribute to skin inflammation and acne. Drink plenty of water throughout the day to keep your skin hydrated from the inside out. Aim for at least eight glasses of water per day, or more if youre active or in a hot climate. Aim for 7-9 hours of quality sleep per night to allow your skin time to repair and regenerate. Lack of sleep can contribute to dark circles, dull skin, and premature aging.';
            setResponce(msg);
        return;
            
        }
        diacount++;
    
        

    }
    //function for mentals;
    let m=49;
    function mentals(){
        if(diacount<question[6].length){
            radioChecked();
        document.getElementById('question').innerHTML=questionFun(question[6]);
        optionArrCount=m;
        m++;
        common();

        }
        else{
            m=49;
            delElement();
            setResponce('Here are some tips for you to take care from mental illeness...','h2');
            let msg='By analysing your responses, Your health is absoultely fine. Prioritize Self-Care: Make time for self-care activities that you enjoy and find rejuvenating, such as reading, exercising, practicing mindfulness or meditation, spending time outdoors, or engaging in creative hobbies. Stay Active: Regular physical activity has numerous benefits for mental health, including reducing stress, improving mood, and boosting self-esteem. Aim for at least 30 minutes of moderate-intensity exercise most days of the week. Maintain a Healthy Lifestyle: Eat a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit consumption of processed foods, sugary snacks, and excessive caffeine or alcohol, as they can negatively impact mood and energy levels. Get Adequate Sleep: Prioritize quality sleep by maintaining a consistent sleep schedule, creating a relaxing bedtime routine, and ensuring your sleep environment is comfortable and conducive to restful sleep Practice Stress Management: Identify stressors in your life and develop healthy coping strategies to manage them effectively. This may include deep breathing exercises, progressive muscle relaxation, visualization techniques, or seeking support from friends, family, or a mental health professional. Build Supportive Relationships: Cultivate strong social connections and maintain supportive relationships with friends, family members, and community members. Spending time with loved ones and having a reliable support network can provide emotional support and reduce feelings of loneliness or isolation. Set Realistic Goals: Break larger goals into smaller, achievable tasks and celebrate your progress along the way. Setting realistic goals can help you stay motivated, build confidence, and maintain a sense of accomplishment. Practice Gratitude: Cultivate an attitude of gratitude by focusing on the positive aspects of your life and expressing appreciation for the things youre thankful for. Keeping a gratitude journal or simply reflecting on what youre grateful for each day can foster a more positive outlook. Limit Screen Time: Be mindful of your screen time and take breaks from digital devices, especially social media and news consumption, which can contribute to feelings of stress, anxiety, and comparison. Instead, focus on activities that promote relaxation and connection with the present moment. Seek Help When Needed: Dont hesitate to reach out for professional help if youre struggling with your mental health. Therapy, counseling, or psychiatric support can provide valuable guidance, support, and treatment options tailored to your individual needs.';
            setResponce(msg);
        return;
            
        }
        diacount++;
    
        


    }
    //pediatrics functions
    let p=59;
    function pediatric(){
        if(diacount<question[7].length){
            radioChecked();
        document.getElementById('question').innerHTML=questionFun(question[7]);
        optionArrCount=p;
        p++;
       
        common();
        }
        else{
            p=59;
            delElement();
            setResponce('Follow below instructons to cure pediatric...');
            let msg="By analysing your responses, Your health is absoultely fine. Offer a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and dairy or dairy alternatives to support your child's growth and development. Encourage regular meals and snacks, and limit sugary snacks and beverages. Be mindful of portion sizes and avoid using food as a reward or punishment. Encourage your child to drink water throughout the day to stay hydrated. Encourage regular physical activity and playtime to support your child's physical development, coordination, and overall well-being. Limit screen time (TV, computer, smartphones, tablets) and encourage outdoor play and other active pursuits. Ensure your child gets the recommended amount of sleep for their age (e.g., 10-12 hours for preschoolers, 9-11 hours for school-aged children).";
            setResponce(msg);
        return;
            
        }
        diacount++;
    

    }
    //function for deleate element
    function delElement(){
       
        const elemm=document.getElementById('div12');
        const elemn=document.getElementById('div23');
        elemn.parentNode.removeChild(elemn);
        elemm.parentNode.removeChild(elemm);
       
    }
    
    //function for give responce
    function setResponce(message,fontSize,color){
       let div= document.createElement('div');
       let p= document.createElement('p');
       let h= document.createElement(fontSize);
       p.style.background=color;
       
       h.textContent=message;
       p.appendChild(h);
       div.appendChild(p);
    
       document.body.appendChild(div);
       document.body.style.textAlign='justify';
       document.body.style.color='#444'
    
       
        
    }
    //function for common
    function common(){
        let val1=optionMenu(optionArray());
        let val2=optionMenu(optionArray());
        let val3=optionMenu(optionArray());
        let val4=optionMenu(optionArray());
        
        document.getElementById('radio1').value=val1;
        document.getElementById('radio2').value=val2;
        document.getElementById('radio3').value=val3;
        document.getElementById('radio4').value=val4;
    
        
        document.querySelector("#label1").innerHTML=val1;
        document.querySelector("#label2").innerHTML=val2;
         
         document.querySelector("#label3").innerHTML=val3;
         document.querySelector("#label4").innerHTML=val4;

    }
    function radioChecked(){
        let str='radio';
        for(let i=1;i<=4;i++){
            
            const opt=document.getElementById(str+i);
            if(opt.checked){
                userdata.push(opt.value);
            }
        }
    }
    function questionFun(arrays){
        if(questionCount==arrays.length-1){
            mainArrayCount++;
            let q=arrays[questionCount];
            questionCount=0;
            return q;
            
        }
        return arrays[questionCount++];
    }
    //function for selecting main array
    
    function mainArray(){
        if(mainArrayCount==question.length-1){
            let tempArr=question[mainArrayCount];
            return tempArr;
        }
        return question[mainArrayCount];

    }

    //function for selectiing option
    function optionMenu(arrays){
        //let optionArr=option[optionArrCount];
        console.log(optionCount);
        if(optionCount>=3){
            let op=arrays[optionCount];
            optionCount=0;
            optionArrCount++;
            return op;
            
            
        }else{
            return arrays[optionCount++];

        }
       

        }
        function optionArray(){
            if(optionArrCount==option.length-1){
                let tempArray=option[optionArrCount];
                return tempArray;

            }
            else{
                return option[optionArrCount];
            }
          
    }
