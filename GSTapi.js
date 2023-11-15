const fetch = require("node-fetch");



const getEinvoice = () => {

    var myHeaders = new fetch.Headers();
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
        "username": "testeway@mastersindia.co",
        "password": "!@#Demo!@#123",
        "client_id": "fIXefFyxGNfDWOcCWnj",
        "client_secret": "QFd6dZvCGqckabKxTapfZgJc",
        "grant_type": "password"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://clientbasic.mastersindia.co/oauth/access_token", requestOptions)
        .then(response => response.text())
        .then(result => {
            var data = JSON.parse(result)
            var access_token = data.access_token;
            if (access_token) {
                var raw = JSON.stringify({
                    "access_token": access_token,
                    "user_gstin": "09AAAPG7885R002",
                    "data_source": "erp",
                    "transaction_details": {
                        "supply_type": "B2B"
                    },
                    "document_details": {
                        "document_type": "INV",
                        "document_number": "MIPL/101",
                        "document_date": new Date().toLocaleDateString()
                    },
                    "seller_details": {
                        "gstin": "09AAAPG7885R002",
                        "legal_name": "MastersIndia UP",
                        "trade_name": "MastersIndia UP",
                        "address1": "Vila",
                        "address2": "Vila",
                        "location": "Noida",
                        "pincode": 201301,
                        "state_code": "UTTAR PRADESH",
                        "phone_number": 9876543231,
                        "email": ""
                    },
                    "buyer_details": {
                        "gstin": "05AAAPG7885R002",
                        "legal_name": "MastersIndia UT",
                        "trade_name": "MastersIndia UT",
                        "address1": "Kila",
                        "address2": "Kila",
                        "location": "Nainital",
                        "pincode": 263001,
                        "place_of_supply": "5",
                        "state_code": "UTTARAKHAND",
                        "phone_number": 9876543231,
                        "email": ""
                    },
                    "dispatch_details": {
                        "company_name": "MastersIndia UP",
                        "address1": "Vila",
                        "address2": "Vila",
                        "location": "Noida",
                        "pincode": 201301,
                        "state_code": "UTTAR PRADESH"
                    },
                    "ship_details": {
                        "gstin": "05AAAPG7885R002",
                        "legal_name": "MastersIndia UT",
                        "trade_name": "MastersIndia UT",
                        "address1": "Kila",
                        "address2": "Kila",
                        "location": "Nainital",
                        "pincode": 263001,
                        "state_code": "UTTARAKHAND"
                    },
                    "export_details": {
                        "ship_bill_number": "",
                        "ship_bill_date": "12/08/2022",
                        "country_code": "IN",
                        "foreign_currency": "INR",
                        "refund_claim": "N",
                        "port_code": "",
                        "export_duty": 2534.34
                    },
                    "payment_details": {
                        "bank_account_number": "Account Details",
                        "paid_balance_amount": 100,
                        "credit_days": 2,
                        "credit_transfer": "Credit Transfer",
                        "direct_debit": "Direct Debit",
                        "branch_or_ifsc": "KKK000180",
                        "payment_mode": "CASH",
                        "payee_name": "Payee Name",
                        "outstanding_amount": 1.9,
                        "payment_instruction": "Payment Instruction",
                        "payment_term": "Terms of Payment"
                    },
                    "reference_details": {
                        "invoice_remarks": "Invoice Remarks",
                        "document_period_details": {
                            "invoice_period_start_date": "2022-08-06",
                            "invoice_period_end_date": "2023-08-07"
                        },
                        "preceding_document_details": [
                            {
                                "reference_of_original_invoice": "CFRT/0006",
                                "preceding_invoice_date": "07/03/2020",
                                "other_reference": "2334"
                            }
                        ],
                        "contract_details": [
                            {
                                "receipt_advice_number": "aaa",
                                "receipt_advice_date": "07/03/2020",
                                "batch_reference_number": "2334",
                                "contract_reference_number": "2334",
                                "other_reference": "2334",
                                "project_reference_number": "2334",
                                "vendor_po_reference_number": "233433454545",
                                "vendor_po_reference_date": "07/02/2022"
                            }
                        ]
                    },
                    "additional_document_details": [
                        {
                            "supporting_document_url": "asafsd",
                            "supporting_document": "india",
                            "additional_information": "india"
                        }
                    ],
                    "value_details": {
                        "total_assessable_value": 4,
                        "total_cgst_value": 0,
                        "total_sgst_value": 0,
                        "total_igst_value": 0.2,
                        "total_cess_value": 0,
                        "total_cess_value_of_state": 0,
                        "total_discount": 0,
                        "total_other_charge": 0,
                        "total_invoice_value": 4.2,
                        "round_off_amount": 0,
                        "total_invoice_value_additional_currency": 0
                    },
                    "ewaybill_details": {
                        "transporter_id": "05AAABB0639G1Z8",
                        "transporter_name": "Jay Trans",
                        "transportation_mode": "1",
                        "transportation_distance": "0",
                        "transporter_document_number": "1230",
                        "transporter_document_date": "15/11/2023",
                        "vehicle_number": "PQR1234",
                        "vehicle_type": "R"
                    },
                    "item_list": [
                        {
                            "item_serial_number": "501",
                            "product_description": "Wheat desc",
                            "is_service": "N",
                            "hsn_code": "1001",
                            "bar_code": "1212",
                            "quantity": 1,
                            "free_quantity": 0,
                            "unit": "KGS",
                            "unit_price": 4,
                            "total_amount": 4,
                            "pre_tax_value": 0,
                            "discount": 0,
                            "other_charge": 0,
                            "assessable_value": 4,
                            "gst_rate": 5,
                            "igst_amount": 0.2,
                            "cgst_amount": 0,
                            "sgst_amount": 0,
                            "cess_rate": 0,
                            "cess_amount": 0,
                            "cess_nonadvol_amount": 0,
                            "state_cess_rate": 0,
                            "state_cess_amount": 0,
                            "state_cess_nonadvol_amount": 0,
                            "total_item_value": 4.2,
                            "country_origin": "",
                            "order_line_reference": "",
                            "product_serial_number": "",
                            "batch_details": {
                                "name": "aaa",
                                "expiry_date": "31/10/2022",
                                "warranty_date": "31/10/2022"
                            },
                            "attribute_details": [
                                {
                                    "item_attribute_details": "aaa",
                                    "item_attribute_value": "147852"
                                }
                            ]
                        }
                    ]
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://clientbasic.mastersindia.co/generateEinvoice", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result)
                        return JSON.parse(result)
                    })
                    .catch(error => {
                        console.log('error', error)
                        return error
                    });
            }

        })
        .catch(error => {
            console.log('error', error)
            return error
        });


}






module.exports = getEinvoice

