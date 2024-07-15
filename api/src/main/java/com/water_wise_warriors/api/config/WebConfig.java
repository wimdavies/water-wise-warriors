package com.water_wise_warriors.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // this configuration is still necessary if you want to access the frontend in dev mode,
    // via localhost:3000, without configuring a proxy
    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     registry.addMapping("/**")
    //             .allowedOrigins("http://localhost:3000")
    //             .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
    //             .allowedHeaders("*")
    //             .allowCredentials(true);
    // }

    // this configuration allows the packaged app in production, and also in development
    // on localhost:8080, to serve files from the `npm build` output copied into classes/static
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
            // Capture everything (REST controllers get priority over this, see above)
            .addResourceHandler("/**")
            // Add locations where files might be found
            .addResourceLocations("classpath:/static/**")
            // Needed to allow use of `addResolver` below
            .resourceChain(true)
            // This thing is what does all the resolving. This impl. is responsible for
            // resolving ALL files. Meaning nothing gets resolves automatically by pointing
            // out "static" above.
            .addResolver(new PathResourceResolver() {
                @Override
                protected Resource getResource(String resourcePath, Resource location) throws IOException {
                    Resource requestedResource = location.createRelative(resourcePath);

                    // If we actually hit a file, serve that. This is stuff like .js and .css files.
                    if (requestedResource.exists() && requestedResource.isReadable()) {
                        return requestedResource;
                    }

                    // Anything else returns the index.
                    return new ClassPathResource("/static/index.html");
                }
            });
    }

}
