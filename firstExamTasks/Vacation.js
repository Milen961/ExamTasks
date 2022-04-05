function vacation(peopleCount, groupType, dayOFWeek) {

    let studentsFridayPrice = 8.45;
    let businessFridayPrice = 10.90;
    let regularFridayPrice = 15;
    let studentsSaturdayPrice = 9.80;
    let bisinessSaturdayPrice = 15.60;
    let regularSaturdayPrice = 20;
    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.50;

    let studentsDiscountPercentage = 15;
    let busineesDiscountCount = 10;
    let regularDiscountPercentage = 5;

    let totalPrice = 0;

    if (groupType === 'Business' && peopleCount >= 100) {
        peopleCount -= busineesDiscountCount;



    }
    if (groupType === 'Students' && dayOFWeek === 'Friday') {
        totalPrice += peopleCount * studentsFridayPrice;

    } else if (groupType === 'Students' && dayOFWeek === 'Saturday') {
        totalPrice += peopleCount * studentsSaturdayPrice;

    } else if (groupType === 'Studenrs' && dayOFWeek === 'Sunday') {
        totalPrice += peopleCount * studentsSundayPrice;
    } else if (groupType === 'Regular' && dayOFWeek === 'Friday') {
        totalPrice += peopleCount * regularFridayPrice;

    } else if (groupType === 'Regular' && dayOFWeek === 'Saturday') {
        totalPrice += peopleCount * regularSaturdayPrice;

    } else if (groupType === 'Regular' && dayOFWeek === 'Sunday') {
        totalPrice += peopleCount * regularSundayPrice;

    } else if (groupType === 'Business' && dayOFWeek === 'Friday') {
        totalPrice += peopleCount *businessFridayPrice;
    } else if (groupType === 'Business' && dayOFWeek === 'Saturday') {
        totalPrice += peopleCount * bisinessSaturdayPrice;

    } else if (groupType === 'Business' && dayOFWeek === 'Sunday') {
        totalPrice += peopleCount * businessSundayPrice;


    }
    if (groupType === 'Students' && peopleCount >= 30) {
        totalPrice -= (studentsDiscountPercentage / 100) *totalPrice;


    }else if (
        groupType === 'Regular' &&
        peopleCount >= 10 &&
        peopleCount <= 20

    ){
        totalPrice -= (regularDiscountPercentage / 100) * totalPrice;

    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, 'Students', 'Sunday');