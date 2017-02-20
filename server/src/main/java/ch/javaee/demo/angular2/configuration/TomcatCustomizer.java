package ch.javaee.demo.angular2.configuration;

import org.springframework.boot.context.embedded.Compression;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.stereotype.Component;

/**
 * Created by marco on 20.02.17.
 */
@Component
public class TomcatCustomizer implements EmbeddedServletContainerCustomizer {

    private static String mimeTypes[] = {"text/html", "text/plain", "text/xml", "text/css", "text/javascript", "application/javascript"};

    @Override
    public void customize(ConfigurableEmbeddedServletContainer configurableEmbeddedServletContainer) {

        Compression compression = new Compression();
        compression.setEnabled(true);

        compression.setMimeTypes(mimeTypes);
        configurableEmbeddedServletContainer.setCompression(compression);
    }
}
