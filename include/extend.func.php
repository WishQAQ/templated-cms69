<?php
function litimgurls($imgid=0)
{
    global $lit_imglist,$dsql;
    //获取附加表
    $row = $dsql->GetOne("SELECT c.addtable FROM #@__archives AS a LEFT JOIN #@__channeltype AS c 
                                                            ON a.channel=c.id where a.id='$imgid'");
    $addtable = trim($row['addtable']);
    
    //获取图片附加表imgurls字段内容进行处理
    $row = $dsql->GetOne("Select imgurls From `$addtable` where aid='$imgid'");
    
    //调用inc_channel_unit.php中ChannelUnit类
    $ChannelUnit = new ChannelUnit(2,$imgid);
    
    //调用ChannelUnit类中GetlitImgLinks方法处理缩略图
    $lit_imglist = $ChannelUnit->GetlitImgLinks($row['imgurls']);
    
    //返回结果
    return $lit_imglist;
}

// 获取图集图片[新增的功能]
function Getimgs($aid, $num = 0){ 
global $cfg_basedir;
global $dsql; 
$imgurls = ''; 
$row = $dsql -> getone("Select imgurls From`dede_addonimages` where aid='$aid'"); // 
$imgurls = $row['imgurls']; 
preg_match_all("/{dede:img (.*)}(.*){\/dede:img/isU", $imgurls, $wordcount); 
$count = count($wordcount[2]); 
if ($num > $count || $num == 0){ 
$num = $count; 
} 
for($i = 0;$i < $num;$i++){ 
$imglist .= "<a href=" . trim($wordcount[2][$i]) . "></a>"; 
} 
if($num>0){return $imglist;}
else{
 $row = $dsql -> getone("Select litpic From`dede_archives` where id='$aid'");
  if($row['litpic']=='')
        {
            $row['litpic'] = '/images/defaultpic.gif';
        }
 return  $row['litpic'];
} 
}

//取第一张图地址  
function firstimg($str_pic)  
{  
$str_sub=substr($str_pic,0,-7).".jpg";//删除缩略图字符串最后七位，然后再补上后缀.jpg  
return $str_sub;  
}  
