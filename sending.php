<?php
echo '
<form name="kala" id="theform">
<input type="file" onchange="clearStats()"name="kala" id="thefile" multiple/>
<div id="filediplay"></div>
<p>uploaded </p><p id="current"></p><p>out of</p><p id="total"></p><br>
<p>upload speed</p><p id="speed"></p><br>
<p id="average"></p>
<p id="max"></p>
<p id="min"></p>
<progress id="progressbar" value="0" max="100" style="width: 400px;"></progress>
<p id="error"></p><br>

</form>
<button  type="button" onclick="checkerr()">Upload</button>
';
