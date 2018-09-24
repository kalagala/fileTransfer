<?php
$dir = "uploads/";
$files = scandir($dir);
//print_r($files);
/* old working code
for($a = 2; $a < count($files); $a++){
  echo '<p>';

  echo'<a download="';echo $files[$a];echo'" href="uploads/';echo $files[$a];echo'">'.$files[$a].'</a>';
  echo '</p>
  ';
}*/
for($a = 2; $a < count($files); $a++){
  if(is_dir($dir.$files[$a])){
    echo '<h2>';
    echo'files in '.$files[$a].' folder';
    echo '</h2>
    ';
    $newdir =$dir.$files[$a];
    //echo "new dir is ".$newdir;
    $subFiles =scandir($newdir);
    //print_r($subFiles);
    for($b = 2; $b < count($subFiles); $b++){
      echo '<p>';
      echo'<a download ="'.$subFiles[$b].'" href="'.$newdir.'/'.$subFiles[$b].'">'.$subFiles[$b].'</a>';
      echo '</p>
      ';
    }
  }else{
    echo '<p>';

    echo'<a download ="'.$files[$a].'" href="uploads/';echo $files[$a];echo'">'.$files[$a].'</a>';
    echo '</p>
    ';

  }

}
