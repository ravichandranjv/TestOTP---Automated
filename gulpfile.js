var gulp=require('gulp'),gulpmocha=require('gulp-mocha');

gulp.task('default', ['watch']);

gulp.task('watch',function(){
	gulp.watch('data/data.xml', function(){
	gulp.start(['checkOTPTimeStamp']);
	});	
});

gulp.task('checkOTPTimeStamp', function (done) {
	gulp.src('test/testmodel2.js')
		.pipe(gulpmocha(),setTimeout(function() {
		    done(null);
  	}, 5000))

	 .once('error', () => {
            process.exit(1);
        })
        .once('end', () => {
            process.exit();
        })
});
