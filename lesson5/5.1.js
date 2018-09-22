"use strict";

let phone = {
    model: '8',
    status: {
      screen: true,
      speeker: true,
      camera_front: true,
      camera_back: true,
      connector: false
    }
};

function compose(func_a, func_b) {
    return function(c) {
        return func_b(func_a(c));
    }
}

const Repair = details => {
    details.map(item => {
        phone.status[item] = true;
    });
}

const Diagnostic = phone => {
    let broken_detail = [];
    for ( var prop in phone.status ) {
        if( phone.status[prop] === false )
            broken_detail.push( prop );
    }
    phone.defects = broken_detail;
    return phone;
}

compose( Diagnostic, Repair );

