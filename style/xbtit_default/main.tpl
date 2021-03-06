<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><tag:main_title /></title>

<!--icons -->
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
<!--icons -->

<!-- #CSS Links -->
<!-- Main Bootstrap Style  -->
<link rel="stylesheet" type="text/css" href="<tag:main_css />">
<!-- #GOOGLE FONT -->
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,200,300,700' rel='stylesheet' type='text/css'>
<!-- Font Awesome -->
<link rel="stylesheet" href="font-awesome-4.5-2.0/css/font-awesome.min.css" type='text/css'>
<!-- Bootstrap Icheck -->
<link href="assets/plugins/iCheck-master/skins/all.css" rel="stylesheet">
<!-- bootstrap-datetimepicker -->
<link rel="stylesheet" href="assets/plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.css">
<link rel="stylesheet" href="assets/plugins/bootstrap-daterangepicker-master/css/daterangepicker-bs3.css">
<!-- Custom CSS -->
<link rel='stylesheet' href='css/global.css' type='text/css' />
<link rel='stylesheet' href='css/hover.css' type='text/css' />
<tag:more_css /> 
<!-- #CSS Links -->

<!-- JavaScript -->
<tag:main_jscript />
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<!-- #DATE Range Picker -->
      <script type="text/javascript" src="assets/plugins/Nestable-master/js/jquery.nestable.js"></script>
      <script type="text/javascript" src="assets/plugins/bootstrap-daterangepicker-master/js/moment.min.js"></script>
      <script type="text/javascript" src="assets/plugins/bootstrap-daterangepicker-master/js/daterangepicker.js"></script>
      <script type="text/javascript">
          jQuery(function($) {
            $('#reservation').daterangepicker(null, function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
            });
         $('#birthday').daterangepicker({ singleDatePicker: true }, function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
            });
         $('#reservationtime').daterangepicker({
              timePicker: true,
              timePickerIncrement: 30,
              format: 'MM/DD/YYYY h:mm A'
            }, function(start, end, label) {
              console.log(start.toISOString(), end.toISOString(), label);
            });
         });
      </script>

<!-- #Form Validation -->
<script type="text/javascript">
         jQuery(function($) {
            $('.input-group input[required], .input-group textarea[required], .input-group select[required]').on('keyup change', function() {
          var $form = $(this).closest('form'),
                    $group = $(this).closest('.input-group'),
            $addon = $group.find('.input-group-addon'),
            $icon = $addon.find('span'),
            state = false;
                    
              if (!$group.data('validate')) {
            state = $(this).val() ? true : false;
          }else if ($group.data('validate') == "email") {
            state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
          }else if($group.data('validate') == 'phone') {
            state = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val())
          }else if ($group.data('validate') == "length") {
            state = $(this).val().length >= $group.data('length') ? true : false;
          }else if ($group.data('validate') == "number") {
            state = !isNaN(parseFloat($(this).val())) && isFinite($(this).val());
          }
         
          if (state) {
              $addon.removeClass('danger');
              $addon.addClass('success');
              $icon.attr('class', 'fa fa-check');
          }else{
              $addon.removeClass('success');
              $addon.addClass('danger');
              $icon.attr('class', 'fa fa-times');
          }
                
                if ($form.find('.input-group-addon.danger').length == 0) {
                    $form.find('[type="submit"]').prop('disabled', false);
                }else{
                    $form.find('[type="submit"]').prop('disabled', true);
                }
         });
            
            $('.input-group input[required], .input-group textarea[required], .input-group select[required]').trigger('change');
            
            
         });
</script>

<!-- Bootstrap iCheck JS -->
<script src="assets/plugins/iCheck-master/js/icheck.js"></script>
<script type="text/javascript">
   jQuery(function($) {
   $(document).ready(function(){
   $('input').iCheck({
   checkboxClass: 'icheckbox_flat-red',
   radioClass: 'iradio_flat-red'
   });
   });
   });
</script>

<!-- Easter Egg Test -->
<script>
var tronstr = ''
  function tron(e){
    switch (e.key) {
      case "t":
        if(tronstr.length == 0){
          tronstr = 't'
        }
        break;
      case "r":
        if(tronstr.length == 1){
          tronstr = 'tr'
        }else{
          tronstr = ''
        }
        break;
      case "o":
        if(tronstr.length == 2){
          tronstr = 'tro'
        }else{
          tronstr = ''
        }
        break;
      case "n":
        if(tronstr.length == 3){
          tronstr = 'tron'
        }else{
          tronstr = ''
        }
        break;
      default:
        tronstr = ''
    }
    if(tronstr == 'tron'){
      var head = document.head, link = document.createElement('link')
      link.type = 'text/css'
      link.rel = 'stylesheet'
      link.href = '/style/tron.css'
      head.appendChild(link)

    }
    console.log(tronstr);
  }
</script>

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- JavaScript -->

  <if:balloons_enabled>
  <script type="text/javascript" src="jscript/overlib.js"></script>
  </if:balloons_enabled>
</head>
<body onkeypress="tron(event)">
  <!-- Top Navigation Start-->
  <div class="container">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><div class="colors"><i class="fa fa-bolt fa-fw margin-bottom"></i>Blu-Edition<i class="fa fa-bolt fa-fw margin-bottom"></i></div></a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-left">
          <tag:main_dropdown />
        </ul>
      </nav>
    </div>
<if:show_nav>
    <!-- SideNav  -->
    <div id='snav' class='en'>
      <ul>
        <li>
          <a href='index.php'>
            <i class="fa fa-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href='index.php?page=modules&amp;module=getrss'>
            <i class="fa fa-rss"></i>
            <span>RSS</span>
          </a>
        </li>
        <li>
        <li>
          <a href='index.php?page=irc'>
            <i class="fa fa-comments"></i>
            <span>IRC</span>
          </a>
        </li>
        <li>
          <a href='index.php?page=modules&amp;module=covers'>
            <i class="fa fa-photo"></i>
            <span>Artwork Section</span>
          </a>
        </li>
         <li>
          <a href='index.php?page=subtitles'>
            <i class="fa fa-font"></i>
            <span>Subtitles</span>
          </a>
        </li>
        <li>
          <a href='index.php?page=extra-stats&amp;type=users'>
            <i class="fa fa-pie-chart"></i>
            <span>Extra Stats</span>
          </a>
        </li>
        <li>
          <a href='index.php?page=flush'>
            <i class="fa fa-refresh"></i>
            <span>Flush Ghost Peers</span>
          </a>
        </li> 
        <li>
          <a href='index.php?page=friendlist'>
            <i class="fa fa-users"></i>
            <span>Friends List</span>
          </a>
        </li>
        <li>
          <a href='index.php?page=notepad'>
            <i class="fa fa-book"></i>
            <span>Notepad</span>
          </a>
        </li>
        <li>
          <a href='index.php?page=bookmark&amp;uid=<tag:uid />'>
          <i class="fa fa-bookmark"></i>
          <span>Bookmarks</span>
        </a>
      </li>
      <li>
        <a href='index.php?page=usercp&amp;uid=<tag:uid />'>
        <i class="fa fa-gear"></i>
        <span>UserCP</span>
      </a>
    </li>
    <li>
      <a href='index.php?page=usercp&amp;uid=<tag:uid />&amp;do=pm&amp;action=list'>
      <i class="fa fa-envelope"></i>
      <span>Mailbox</span>
    </a>
  </li>
  <li>
    <a href='index.php?page=modules&amp;module=helpdesk'>
      <i class="fa fa-question-circle"></i>
      <span>Helpdesk</span>
    </a>
  </li>
  <li>
    <a href='index.php?page=rules'>
      <i class="fa fa-file-text-o"></i>
      <span>Rules</span>
    </a>
  </li>
  <li>
    <a href='index.php?page=faq'>
      <i class="fa fa-info"></i>
      <span>FAQ</span>
    </a>
  </li>
  <li>
    <a href='index.php?page=donate_options'>
      <i class="fa fa-usd"></i>
      <span>Donate</span>
    </a>
  </li>
  <li>
    <a href='logout.php'>
      <i class="fa fa-sign-out"></i>
      <span>Logout</span>
    </a>
  </li>
</ul>
</div>
</if:show_nav>
<!--Spacer-->
<br>
<br>
<br>

<!-- MainUser Info Bar / Tracker Settings -->
<div class="container-fluid">
  <div class="row-fluid">
    <tag:main_header />
  </div>
</div>

<!--Spacer-->
<br>

<script type="text/javascript">
var q=jQuery.noConflict();
q(document).ready(function(){
q('#ann').load('ann.php?ignoreMe=' + new Date().getTime()).fadeIn("slow");
});
</script>
<div id="ann"></div>

<!--Main Page Content -->
<table border='0' align='center' cellpadding='0' cellspacing='0' width='100%'>
<tr>
<td valign='top' width='5' rowspan='2'></td>
<if:HAS_LEFT_COL>
<td valign='top' width='225'><tag:main_left /></td>
</if:HAS_LEFT_COL>

<td valign='top'>
<table align='center' width='100%' cellpadding='0' cellspacing='0' border='0'>
<tr>
<td valign='top'><tag:main_content /></td>
</tr>
</table></td>

<if:HAS_RIGHT_COL>
<td valign='top' width='225'><tag:main_right /></td>
</if:HAS_RIGHT_COL>
<td valign='top' width='5' rowspan='2'></td>
</tr>
</table>

<!-- Bottom Blocks -->
<div class="container-fluid">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <tag:main_footer />
    </div>
  </div>
</div>

<!-- Footer -->
<if:valid_user>
<footer>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title"></h3>
          </div>
          <div class="panel-body">
            <center>
              <p>Made with <i class="fa fa-fw fa-magic"></i> by <a href="#">BluCrew</a></p>
              <p class="text-success">Copyright &copy; 2016 XBTIT Blu Edition v1.1.04 by BluCrew</p>
              <p class="text-success">Copyright &copy; 2016 Styled By BluCrew</p>
              <p class="text-danger"><tag:xbtit_debug /></p>
              <a class="btn btn-lg btn-success" href="https://fortawesome.github.io/Font-Awesome/"><i class="fa fa-fort-awesome fa-2x pull-left" aria-hidden="true"></i> Font Awesome Version 4.6.1</a>&nbsp;&nbsp;
              <a class="btn btn-lg btn-primary" href="https://getbootstrap.com"><i class="fa fa-css3 fa-2x pull-left" aria-hidden="true"></i> Bootstrap Version 3.3.6</a>
              <p class="text-danger">This site is best viewed with the following browsers</p>
              <button class="btn btn-primary btn-circle btn-lg" type="button"><i class="fa fa-safari"></i></button>
              <button class="btn btn-warning btn-circle btn-lg" type="button"><i class="fa fa-firefox"></i></button>
              <button class="btn btn-success btn-circle btn-lg" type="button"><i class="fa fa-chrome"></i></button>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</if:valid_user>
<if:anon_enabled>
  <script src="<tag:protected />/jscript/anon.js" type="text/javascript"></script>
  <script type="text/javascript">
  protected_links = "<tag:protected />";
  auto_anonymize();
  </script>
</if:anon_enabled>
</body>
</html>