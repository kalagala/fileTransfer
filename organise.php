<?php
$dir = "uploads/";
$files = scandir($dir);
for($a = 2; $a < count($files); $a++){
  if(!is_dir($dir.$files[$a])){
    $type = mime_content_type("uploads/".$files[$a]);
    if(strpos($type,"video") !== false){
      if(!is_dir($dir."video")){
        mkdir($dir."video",0777);
      }
      rename($dir.$files[$a],$dir."video/".$files[$a]);

    }else if(strpos($type,"audio") !== false){
      if(!is_dir($dir."Audio")){
        mkdir($dir."Audio",0777);
      }
      rename($dir.$files[$a],$dir."Audio/".$files[$a]);

    }
    else if(strpos($type,"compressed") !== false){
      if(!is_dir($dir."Compressed")){
        mkdir($dir."Compressed",0777);
      }
      rename($dir.$files[$a],$dir."Compressed/".$files[$a]);

    }

    else if(strpos($type,"application") !== false){
      if(!is_dir($dir."Application")){
        mkdir($dir."Application",0777);
      }
      rename($dir.$files[$a],$dir."Application/".$files[$a]);
    }else if(strpos($type,"text") !== false){
      if(!is_dir($dir."Texts")){
        mkdir($dir."Texts",0777);
      }
      rename($dir.$files[$a],$dir."Texts/".$files[$a]);

    }else if(strpos($type,"image") !== false){
      if(!is_dir($dir."Pictures")){
        mkdir($dir."Pictures",0777);
      }
      rename($dir.$files[$a],$dir."Pictures/".$files[$a]);

    }else {
      if(!is_dir($dir."Other")){
        mkdir($dir."Other",0777);
      }
      rename($dir.$files[$a],$dir."Other/".$files[$a]);

    }

  }


}
