package com.example.VirtualMarket.VisitorPackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/api/visitors")
public class VisitorController {

    @Autowired
    private VisitorRepository visitorRepository;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Visitor> getAllVisitors() {
        return visitorRepository.findAll();
    }
}
