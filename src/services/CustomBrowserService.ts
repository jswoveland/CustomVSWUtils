import { ServiceBase } from "@vertigis/web/services";
import {command } from "@vertigis/web/messaging";
import {operation } from "@vertigis/web/messaging";

export default class CustomBrowserService extends ServiceBase {

    @command("custom.NavigateToUrl")
    protected _handleNavigateToUrl(arg: any): void {
        window.location.href = arg.url;
        
    } 

    @operation("custom.CopyToClipboard")
    protected _handleCopyToClipboard(arg: any) : Promise<boolean> {
        // eslint-disable-next-line no-debugger
        console.log(`CustomBrowserService operation custom.CopyToClipboard.  Copying  '${<string>arg.value}' to the clipboard `);
        return  navigator.clipboard.writeText(<string>arg.value).then(() => {return true;}, () => {return false}); 
    }
}