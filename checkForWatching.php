<?php
$dir = "uploads/";
$files = scandir($dir);

for($a = 2; $a < count($files); $a++){
  if(is_dir($dir.$files[$a])){
    echo '<h2>';
    echo'files in '.$files[$a].' folder';
    echo '</h2>
    ';
    $newdir =$dir.$files[$a];
    $filesSubDir =scandir($newdir);
    for($b = 2; $b < count($filesSubDir);$b++){
      echo '<p>';
      echo'<a  href="'.$newdir.'/'.$filesSubDir[$b].'">'.$filesSubDir[$b].'</a>';
      echo '</p>
      ';
    }
  }else{
    echo '<p>';

    echo'<a  href="uploads/';echo $files[$a];echo'">'.$files[$a].'</a>';
    echo '</p>
    ';

  }

}
