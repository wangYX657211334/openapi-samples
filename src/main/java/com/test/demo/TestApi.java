package com.test.demo;

import com.test.demo.core.model.ProductList;
import com.test.demo.core.rest.interfaces.ProductsApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;

@RestController
public class TestApi implements ProductsApi {
    @Override
    public Mono<ResponseEntity<ProductList>> productsGet(@NotNull @Valid Double latitude, @NotNull @Valid Double longitude, ServerWebExchange exchange) {
        return Mono.just(ResponseEntity.ok(
                new ProductList().products(new ArrayList<>())
        ));
    }
}
