/**
 * Created by tommyZZM on 2015/7/7.
 */

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