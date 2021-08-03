import app from '@server';
const port = 3000;
app.listen(port, () => {
    console.log('Express server running at: ' + port);
});
