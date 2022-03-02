<script type="text/javascript">
    var d=new Date();
    var time = d.getHours();
    if (time<10)
    {
        document.write("<b>Good morning</b>");
    }
    else if (time>=10 && time<16)
    {
        document.write("<b>Good day</b>");
    }
    else
    {
        document.write("<b>Hello world!</b>");
    }
</script>
<p>Questo esempio dimostra if...else if...else </p>