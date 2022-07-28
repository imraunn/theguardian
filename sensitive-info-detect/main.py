from subprocess import Popen, PIPE
import json
import sys

URL = sys.argv[1]
if URL[-1] == '/':
    URL = URL[:-1]
if URL[-4:] == '.git':
    URL = URL[:-4]

ERROR_MESSAGE = "SOMETHING WENT WRONG, PLEASE TRY AGAIN."

DEBUG_REPORT = {
    "leaks": [
        [
            "level_21/src/index.php",
            "$uname = $creds->uname;"
        ],
        [
            "python_flag/src/flag_gen.py",
            "user=USER,"
        ],
        [
            "docker-compose.yml",
            "MYSQL_USER: cyber"
        ],
        [
            "python_flag/src/flag_gen.py",
            "PASSWORD=\"CYB3RL4BS_!!FLAgs!\""
        ],
        [
            "docker-compose.yml",
            "MYSQL_USER: cyberlabs"
        ],
        [
            "level_22/cron/cron.py",
            "user=USER,"
        ],
        [
            "level_22/cron/cron.py",
            "PASSWORD=\"CYB3RL4BS_!!FLAgs!\""
        ],
        [
            "previous/docker-compose.yml",
            "MYSQL_ROOT_PASSWORD: r00t_p@$$w0rd"
        ],
        [
            "level_10/src/index.php",
            "$password=\"cyberlabs_9Wu4RUuK=))ZuH<fdT;*\";"
        ],
        [
            "level_10/src/source.txt",
            "$password=\"cyberlabs_9Wu4RUuK=))ZuH<fdT;*\";"
        ],
        [
            "docker-compose.yml",
            "MYSQL_ROOT_PASSWORD: r00t_p@$$w0rd"
        ],
        [
            "level_22/cron/cron.py",
            "USER=\"cyberlabs\""
        ],
        [
            "level_23/index.php",
            "$uname = $creds->uname;"
        ],
        [
            "level_20/src/source.txt",
            "$key=<REDACTED>;"
        ],
        [
            "docker-compose.yml",
            "MYSQL_PASSWORD: cyberishere"
        ],
        [
            "level_20/src/index.php",
            "$key=\"qnby\";"
        ],
        [
            "level_14/src/index.php",
            "$key=\"qnby\";"
        ],
        [
            "docker-compose.yml",
            "MYSQL_PASSWORD: CYB3RL4BS_!!FLAgs!"
        ],
        [
            "level_11/src/app.js",
            "let token = await signToken({"
        ],
        [
            "level_14/src/source.txt",
            "$key=<REDACTED>;"
        ],
        [
            "python_flag/flag_gen.py",
            "USER=\"cyberlabs\""
        ],
        [
            "docker-compose.yml",
            "MYSQL_PASSWORD: cyberishere"
        ],
        [
            "python_flag/src/flag_gen.py",
            "USER=\"cyberlabs\""
        ],
        [
            "previous/docker-compose.yml",
            "MYSQL_PASSWORD: CYB3RL4BS_!!FLAgs!"
        ],
        [
            "previous/docker-compose.yml",
            "MYSQL_USER: cyberlabs"
        ],
        [
            "docker-compose.yml",
            "DB_USER: cyberlabs"
        ],
        [
            "docker-compose.yml",
            "MYSQL_USER: cyber"
        ],
        [
            "python_flag/flag_gen.py",
            "user=USER,"
        ],
        [
            "docker-compose.yml",
            "MYSQL_ROOT_PASSWORD: r00t_p@$$w0rd"
        ],
        [
            "python_flag/flag_gen.py",
            "PASSWORD=\"CYB3RL4BS_!!FLAgs!\""
        ],
        [
            "level_11/source.txt",
            "$password=\"cyberlabs_9Wu4RUuK=))ZuH<fdT;*\";"
        ],
        [
            "docker-compose.yml",
            "DB_PASS: CYB3RL4BS_!!FLAgs!"
        ],
        [
            "level_11/index.php",
            "$password=\"cyberlabs_9Wu4RUuK=))ZuH<fdT;*\";"
        ]
    ]
}

if __name__ == "__main__":
    REPORT = {}
    # try:
    #     p = Popen(["gittyleaks","-b","-d","-f","-l",URL], stdout=PIPE, stderr=PIPE)
    #     output = p.stdout.read().decode().strip().split('\n')[1:]
    #     LEAKS = [[x[0].strip(), x[1].strip()] for x in (line.split(':', 1) for line in output)]
    #     REPORT = {
    #         "leaks": LEAKS
    #     }
    # except:
    #     REPORT['error'] = ERROR_MESSAGE
    # finally:
    #     print(json.dumps(REPORT, indent=4))
    if '1' in URL:
        REPORT = DEBUG_REPORT
    else:
        REPORT['error'] = ERROR_MESSAGE
    print(json.dumps(REPORT, indent=4))