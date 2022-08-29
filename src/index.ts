import { LibraryRegistry } from "@vertigis/web/config";
import CustomBrowserService from "./services/CustomBrowserService";

export default function (registry: LibraryRegistry): void {
    
    registry.registerService({
        id: "CustomBrowserService",
        getService: () => new CustomBrowserService()
    }); 
    
    registry.registerCommand({
        name: "custom.NavigateToUrl",
        serviceId: "CustomBrowserService"
    });

    registry.registerOperation({
        name: "custom.CopyToClipboard",
        serviceId: "CustomBrowserService"
    });
}
