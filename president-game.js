$(document).ready(function(){
    $("#part1").hide();
    $("#part2").hide();
    var presidents = [
	['George Washington', 'http://upload.wikimedia.org/wikipedia/commons/1/12/Gilbert_Stuart%2C_George_Washington_%28Lansdowne_portrait%2C_1796%29.jpg'],
	['John Adams','http://upload.wikimedia.org/wikipedia/commons/2/25/US_Navy_031029-N-6236G-001_A_painting_of_President_John_Adams_%281735-1826%29%2C_2nd_president_of_the_United_States%2C_by_Asher_B._Durand_%281767-1845%29-crop.jpg'],
	['Thomas Jefferson','http://upload.wikimedia.org/wikipedia/commons/1/1e/Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg'],
	['James Madison','http://upload.wikimedia.org/wikipedia/commons/1/1d/James_Madison.jpg'],
	['James Monroe','http://upload.wikimedia.org/wikipedia/commons/f/f2/Jm5.gif'],
	['John Quincy Adams','http://upload.wikimedia.org/wikipedia/commons/2/25/John_Quincy_Adams_by_GPA_Healy%2C_1858.jpg'],
	['Andrew Jackson','http://upload.wikimedia.org/wikipedia/commons/4/43/Andrew_jackson_head.jpg'],
	['Martin Van Buren','http://upload.wikimedia.org/wikipedia/commons/c/c0/Mb8.gif'],
	['William Henry Harrison','http://upload.wikimedia.org/wikipedia/commons/d/d3/William_Henry_Harrison_by_James_Reid_Lambdin%2C_1835.jpg'],
	['John Tyler','http://upload.wikimedia.org/wikipedia/commons/0/00/WHOportTyler.jpg'],
	['James K. Polk','http://upload.wikimedia.org/wikipedia/commons/b/b1/James_Knox_Polk_by_GPA_Healy%2C_1858.jpg'],
	['Zachary Taylor','http://upload.wikimedia.org/wikipedia/commons/6/6b/Zachary_Taylor_by_Joseph_Henry_Bush%2C_c1848.jpg'],
	['Millard Fillmore','http://upload.wikimedia.org/wikipedia/commons/9/9f/Millard_Fillmore_by_George_PA_Healy%2C_1857.jpg'],
	['Franklin Pierce','http://upload.wikimedia.org/wikipedia/commons/a/a0/Franklin_Pierce_by_GPA_Healy%2C_1858.jpg'],
	['James Buchanan','http://upload.wikimedia.org/wikipedia/commons/9/98/JamesBuchanan_crop.jpg'],
	['Abraham Lincoln','http://upload.wikimedia.org/wikipedia/commons/7/78/Lincoln_by_George_H_Story_c1915.jpg'],
	['Andrew Johnson','http://www.nps.gov/anjo/images/20060718153726.jpg'], //chose different image
	['Ulysses S. Grant','http://upload.wikimedia.org/wikipedia/commons/d/d7/Ulysses_Grant_1870-1880.jpg'],
	['Rutherford B. Hayes','http://paulmerrill.com/wp-content/uploads/2011/05/hayes.jpg'],
	['James A. Garfield','http://upload.wikimedia.org/wikipedia/commons/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg'],
	['Chester A. Arthur','http://upload.wikimedia.org/wikipedia/commons/4/48/20_Chester_Arthur_3x4.jpg'],
	['Grover Cleveland','http://upload.wikimedia.org/wikipedia/commons/5/55/StephenGroverCleveland.png'],
	['Benjamin Harrison','http://upload.wikimedia.org/wikipedia/commons/f/f8/Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg'],
	['William McKinley','http://upload.wikimedia.org/wikipedia/commons/a/a9/William_McKinley_by_Courtney_Art_Studio%2C_1896.jpg'],
	['Theodore Roosevelt','http://upload.wikimedia.org/wikipedia/commons/1/19/President_Theodore_Roosevelt%2C_1904.jpg'],
	['William Howard Taft','http://1.bp.blogspot.com/_FBiSCs9aYkc/TBFkNK55aRI/AAAAAAAACSg/zq0iR7TQkao/s1600/taft+2.jpg'],
	['Woodrow Wilson','http://media.shmoop.com/media/players/Hist00044/Hist00044_Woodrow_Wilson01.jpg'],
	['Warren G. Harding','http://upload.wikimedia.org/wikipedia/commons/c/c4/Warren_G_Harding-Harris_%26_Ewing.jpg'],
	['Calvin Coolidge','http://upload.wikimedia.org/wikipedia/commons/0/0b/Calvin_Coolidge-Garo.jpg'],
	['Herbert Hoover','http://upload.wikimedia.org/wikipedia/commons/b/ba/HerbertHoover.jpg'],
	['Franklin D. Roosevelt','http://upload.wikimedia.org/wikipedia/commons/b/b8/FDR_in_1933.jpg'],
	['Harry S. Truman','http://upload.wikimedia.org/wikipedia/commons/9/92/Harry-truman.jpg'],
	['Dwight D. Eisenhower','http://upload.wikimedia.org/wikipedia/commons/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg'],
	['John F. Kennedy','http://upload.wikimedia.org/wikipedia/commons/6/6e/JohnFK.png'],
	['Lyndon B. Johnson','http://upload.wikimedia.org/wikipedia/commons/c/c3/37_Lyndon_Johnson_3x4.jpg'],
	['Richard Nixon','http://upload.wikimedia.org/wikipedia/commons/2/20/Richard_Nixon.jpg'],
	['Gerald Ford','http://upload.wikimedia.org/wikipedia/commons/4/4e/Gerald_Ford.jpg'],
	['Jimmy Carter','http://upload.wikimedia.org/wikipedia/commons/5/5a/JimmyCarterPortrait2.jpg'],
	['Ronald Reagan','http://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg'],
	['George H. W. Bush','http://upload.wikimedia.org/wikipedia/commons/0/0f/George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait.jpg'],
	['Bill Clinton','http://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg'],
	['George W. Bush','http://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg'],
	['Barack Obama','http://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Barack_Obama.jpg']
    ];
    var startCountdown = function(){ 
	setTimeout(function(){$('#part2').fadeIn();},3000);
    }
    var startGame = function(){
	$('#welcome').fadeOut(function(){
	    $('#part1').fadeIn();
	});
	president_number = Math.floor(Math.random() * 43);
	console.log(presidents[president_number][0]);
	$('#pic').html("<img src='" + presidents[president_number][1] + "'>");

    }

    $('#start').click(function () {
	startGame();
    });
});