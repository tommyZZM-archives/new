/**
 * Created by tommyZZM on 2015/7/11.
 */
module game{
    export class AppInterface extends React.Component<any,any>{
        public render() {
            return React.jsx(`
                <div>
                    <h1>Hello, world!</h1>
                    <a className="btn btn-default" onClick={this.handelClick} >Test</a>
                </div>
            `);
        }

        private handelClick(){
            console.log("click");
        }
    }
}