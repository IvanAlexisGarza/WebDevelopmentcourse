    // note this cookie name "s_days_since" should match the cookie name setup in function s_doPlugins(s) in the config.js.jsp file
    this.s_days_since = null;

    if (typeof s.getDaysSinceLastVisit != 'undefined') {
        this.s_days_since = s.getDaysSinceLastVisit("s_days_since");
    }

    if (this.s_days_since != null && this.s_days_since == "First Visit") {
        this.isNewVisitor = true;
    }

    // note this cookie name "s_days_since" should match the cookie name setup in function s_doPlugins(s) in the config.js.jsp file
    //********************UPDATE */

    this.s_days_since = s.isNewVisitor("s_days_since");

    if (this.s_days_since == "First Visit") {
        this.isNewVisitor = true;
    }


    //Alexis' and Alberto's awesome new function !
    this.isNewVisitor = function (c) {
        let cval = s.c_r(c);
        return cval.length == 0 ? true : false;
    }






    let startTime = new Date();

    Date() - startTime;

    //Current getDaysSinceLastVisit 
    s.getDaysSinceLastVisit = new Function("c",
                                            var s = this,
        e = new Date(),
        es = new Date(),
        cval, cval_s,
        cval_ss,
        ct = e.getTime(),
        day = 24 * 60 * 60 * 1000, f1, f2, f3, f4, f5;

    e.setTime(ct + 3 * 365 * day);

    es.setTime(ct + 30 * 60 * 1000);

    f0 = 'Cookies Not Supported';
    f1 = 'First Visit';
    f2 = 'More than 30 days';
    f3 = 'More than 7 days';
    f4 = 'Less than 7 days';
    f5 = 'Less than 1 day';

    cval = s.c_r(c);

    if (cval.length == 0) {
        s.c_w(c, ct, e);
        s.c_w(c + '_s', f1, es);
    }
    else {
        var d = ct - cval;
        if (d > 30 * 60 * 1000) {
            if (d > 30 * day) {
                s.c_w(c, ct, e);
                s.c_w(c + '_s', f2, es);
            } else if (d < 30 * day + 1 && d > 7 * day) {
                s.c_w(c, ct, e);
                s.c_w(c + '_s', f3, es);
            } else if (d < 7 * day + 1 && d > day) {
                s.c_w(c, ct, e);
                s.c_w(c + '_s', f4, es);
            } else if (d < day + 1) {
                s.c_w(c, ct, e);
                s.c_w(c + '_s', f5, es);
            }
        } else {
            s.c_w(c, ct, e);
            cval_ss = s.c_r(c + '_s');
            s.c_w(c + '_s', cval_ss, es);
        }
    }
