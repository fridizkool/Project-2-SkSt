# Developer's guide

## Dev Scripts

I will be referencing a lot of build scripts. I recommend using the Task Runner plugin and creating tasks to run each script instead of using the command line. 

## How (and where) to make a change and see it happen

Firstly, make sure you ask the administrator for the `secret.env` file, otherwise none of the build scripts will be able to load the correct environment variables.

Secondly, ensure you `git pull` and run `mvn clean`. Then, ensure you installed all front end dependencies locally by navigating to [src\main\resources\frontend](src\main\resources\frontend) and running `npm install`. Alternatively, just call the build script [clean_install.bat](build-scripts\clean_install.bat) from the root directory.

This is a full stack project. The back end is written with Java Spring, and serves a React+TypeScript front end. The bulk of the backend is defined in the [src\main\java\com\skillstorm\taxprep](src\main\java\com\skillstorm\taxprep) folder. The frontend is defined in src\main\resources\frontend. 

In order to build and run the project, you can either independently build and run the front end/back end, or build both.

### Front end

Call the [start-react-quickreload-no-backend.bat](build-scripts\start-react-quickreload-no-backend.bat) file from the root directory. It should build the React app and deploy it to a localhost link. View the front end by accessing that link. Hot-refresh is enabled so any saved changes will be immediately available.

### Back end
Call the [runSpringOnly.bat](build-scripts\runSpringOnly.bat) script from the root directory. This will build the Spring project. Once the Spring project is fully loaded, you can access the endpoints with a tool like PostMan or `curl`. 

`TODO(?): Create spring dev mode with mocked back end for manual testing`

### Full Stack

You can also call the [buildandrun.bat](build-scripts\runSpringOnly.bat) script from the root directory, which builds both the front end and back end and deploys it to localhost:3000 (port may be changed later). 

## Testing

Run tests using the appropriate files in [build-scripts/tests]. **Do not** use the Maven VSCode plugin's Lifecycle `test` button, as it will fail to load the environment variables.


## Deployment details