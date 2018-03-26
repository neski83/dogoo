<?php
    class Sex{
        public $id;
        public $name;
        public $selected;

        function Sex($idViene, $nameViene, $selectedViene){
            $this->id = $idViene;
            $this->name = $nameViene;
            $this->selected = $selectedViene;
        }
    }
?>