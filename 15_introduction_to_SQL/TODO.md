# TODO List for Adding Host Home Button and Functionality

- [x] Add "Host Home" button to the header in store views (e.g., home-detail.ejs) linking to /host/home-list.
- [x] Modify host-home-list.ejs to add "Edit" and "Details" buttons on each home card.
- [x] Add a new route /host/home-detail/:id in hostRouter.js.
- [x] Add getHomeDetail function in hostController.js to render host/home-detail.ejs.
- [x] Create host/home-detail.ejs view file.
- [x] Create host/edit-home.ejs view file with form for editing home details.
- [x] Add postEditHome function in hostController.js to handle form submission and update home.
- [x] Add POST route for /host/edit-home/:id in hostRouter.js.
