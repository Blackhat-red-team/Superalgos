const pm2m = require('../../Pm2Management/manager').pm2Manager()

exports.platformCommand = function platformCommand() {
    const thisObject = {
        name: 'platform',
        description: 'Runs the platform app',
        options: options,
        runner: runner
    }
    return thisObject

    function options(cmd) {
        return cmd.option('minMemo', {
            boolean: true,
            default: false
        }).option('noBrowser', {
            boolean: true,
            default: false
        })
    }

    function runner(args) {
        const arguments = []
        if(args.minMemo) { arguments.push('minMemo')}
        if(args.noBrowser) { arguments.push('noBrowser')}
        
        console.log('[INFO] Platform app starting with the following options: ', JSON.stringify(arguments))
        // pm2m.connect()
        // .then(() => pm2m.start({
        //     script: 'platform.js',
        //     name: 'platform',
        //     args: arguments,
        //     cwd: path.join(__dirname),
        //     log_file: path.join(__dirname, 'Platform', 'My-Log-Files', 'platform-console.log')
        // })).then(() => pm2m.disconnect())
    }
}