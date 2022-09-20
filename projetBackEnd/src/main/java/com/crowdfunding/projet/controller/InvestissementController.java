package com.crowdfunding.projet.controller;

import com.crowdfunding.projet.entity.Users;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/loop/invest")
public class InvestissementController {

    @Value("${stripe.apikey}")
    String stripekey;

    @RequestMapping("/createCustomer")
    public Users index(@RequestBody Users data) throws StripeException {
        Stripe.apiKey =stripekey;

        Map<String, Object> params = new HashMap<>();
        params.put(
                "name",
                data.getNom()
        );
        params.put(
                "email",
                data.getEmail()
        );
        //customer est à stripe
        Customer customer = Customer.create(params);
        data.setIdUser(Long.valueOf(customer.getId()));
        return data;
    }
}
