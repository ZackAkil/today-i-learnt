// firebase rule to only allow access if data is less than 30 days old
allow read : if request.time < (resource.data.time + duration.time(30*24, 0, 0, 0));
