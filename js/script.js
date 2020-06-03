const URL = "http://localhost:5000/"

function loading(msgLoading) {
    $('.blanket').show();
    $('.msgLoading').html(msgLoading);
}

function loaded() {
    $('.blanket').hide();
}

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('body').scrollspy({ target: '#list-example' });
});;

$(document).on('click', '.employee .deleteEmployee', function() {
    // var url = $(this).attr('data-url');
    var url = URL;
    var employeeID = $(this).closest('.employee').attr('data-id');
    if (confirm("Are you sure you want to delete " + $('.firstName_' + employeeID).val() + "?")) {
        loading();
        $.post(url, { EmployeeID: employeeID }, function() {
            $('.employee_' + employeeID).remove();
            loaded();
        });
    }
});

$(document).on('change', '.employee:not(.employee_0) .firstName', function() {
    var url = $(this).attr('data-url');
    var employeeID = $(this).closest('.employee').attr('data-id');
    var firstName = $.trim($(this).val());
    if (firstName === "") {
        alert('First name is required');
    } else {
        $.post(url, { EmployeeID: employeeID, FirstName: firstName }, function() {});
    }
});

$(document).on('change', '.employee:not(.employee_0) .lastName', function() {
    var url = $(this).attr('data-url');
    var employeeID = $(this).closest('.employee').attr('data-id');
    var lastName = $.trim($(this).val());
    if (lastName === "") {
        alert('Last name is required');
    } else {
        $.post(url, { EmployeeID: employeeID, LastName: lastName }, function() {});
    }
});

$(document).on('change', '.employee:not(.employee_0) .eligible', function() {
    var url = $(this).attr('data-url');
    var employeeID = $(this).closest('.employee').attr('data-id');
    var eligible = $(this).prop('checked');
    loading();
    $.post(url, { EmployeeID: employeeID, Eligible: eligible }, function() {
        loaded();
    });
});

$(document).on('click', '.addEmployeeMainButton', function() {
    $('.dropDownButtonOptions').removeClass('hide');
});

$(document).on('click', '.addEmployeeOption1', function() {
    $('.employee.employee_0').toggleClass('hide');
    $(this).closest('.dropDownButtonOptions').addClass('hide');
});

let counter = 1

$(document).on('click', '.btnAddEmployeeRow', function() {

    // var url = $(this).attr('data-url');
    var url = URL;
    var firstName = $.trim($('.firstName_0').val());
    var lastName = $.trim($('.lastName_0').val());
    var email = $.trim($('.email_0').val());
    var phoneNo = $.trim($('.phone_0').val());
    var department = $.trim($('.department_0').val());

    if (firstName == "") {
        alert('Please enter First Name');
    } else if (lastName == "") {
        alert('Please enter Last Name');
    } else if (email == "") {
        alert('Please enter Email');
    } else if (phoneNo == "") {
        alert('Please enter Phone No');
    } else if (department == "") {
        alert('Please enter Department');
    } else {
        var data = `
        <div class="s_bodyRow bodyRow employee employee_${counter}" data-id="${counter}">
            <div class="col-xl-0 col-lg-0 col-md-0 col-sm-12 col-xs-12 actionsContainer">
                <i class="fa fa-trash-o deleteEmployee" aria-hidden="true" data-placement="top" data-toggle="tooltip" title="Delete Employee" data-url="/Service/Step1/DeleteEmployee"></i>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="s_bodyHeader">First Name</div>
                <div class="firstNameContainer"><input type="text" class="textbox firstName firstName_${counter}" value="${firstName}" data-url="/Service/Step1/UpdateFirstName" disabled></div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="s_bodyHeader">Last Name</div>
                <div class="lastNameContainer"><input type="text" class="textbox lastName lastName_${counter}" value="${lastName}" data-url="/Service/Step1/UpdateLastName" disabled></div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="s_bodyHeader">Email</div>
                <div class="emailContainer"><input type="email" class="textbox email email_${counter}" value="${email}" data-url="/Service/Step1/UpdateLastName" disabled></div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="s_bodyHeader">Email</div>
                <div class="phoneNoContainer"><input type="email" class="textbox phone phone_${counter}" value="${phoneNo}" data-url="/Service/Step1/UpdateLastName" disabled></div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="s_bodyHeader">Department</div>
                <div class="deptNameContainer"><input type="text" class="textbox department department_${counter}" value="${department}" data-url="/Service/Step1/UpdateLastName" disabled></div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 addEmployeeContainer">
                <a class="editEmployeeStep1 link" data-placement="top" data-toggle="tooltip" title="Invite Employee" data-id="19">Invite</a>
            </div>
        </div>
        `

        $.post(url, { FirstName: firstName, LastName: lastName, Email: email, PhoneNo: phoneNo, Department: department }, function() {
            loading();
            $('.employee_0').after(data);
            $('.firstName_0').val('');
            $('.lastName_0').val('');
            $('.email_0').val('');
            $('.department_0').val('');
            $('.firstName_0').focus();
            loaded();
            counter += 1;
        });
    }
});


$(document).ready(function() {

});


/** Functions to Implement */

$(document).on('click', '.employee .inviteEmployee', function() {
    // var url = $(this).attr('data-url');
    var url = URL;
    var employeeID = $(this).closest('.employee').attr('data-id');
    if (confirm("Are you sure you want to Invite " + $('.firstName_' + employeeID).val() + "?")) {
        loading();
        $.post(url, { EmployeeID: employeeID }, function() {
            console.log("Function Called for Invite");
            loaded();
        });
    }
});


$(document).on('click', '.callImportFromExcel', function() {
    /** Function for excel */
    console.log("Function Called for Excel");

});