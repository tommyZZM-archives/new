/**
 * Created by tommyZZM on 2015/7/7.
 */
/// <reference path="../define/entry.h.ts" />
 /// <reference path="../define/typings/tsd.d.ts" />
 
module game{

    import EventDispatcher = core.EventDispatcher;

    export class Main extends EventDispatcher{

        public constructor(){
            super();

            //console.log(AppInterface);
            React.render(
                React.jsx(`<AppInterface />`),
                document.getElementById('example')
            );
        }
    }

    new Main();
}