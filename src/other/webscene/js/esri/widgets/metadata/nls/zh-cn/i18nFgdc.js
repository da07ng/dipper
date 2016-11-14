define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "试_FGDC__验",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "试_None__验",
    	notComplete: "试_Not complete_____验",
    	other: "试_Other___验",
    	present: "试_Present___验",
    	unknown: "试_Unknown___验",
    	unpublishedMaterial: "试_Unpublished material_______验"
    },
    
    hints: {
    	integerGreaterThanOne: "试_(enter an integer > 1)________验",
    	integer0To100: "试_(enter an integer 0..100)_________验"
    },
    
    citeinfo: {
    	caption: "试_Citation Information_______验",
    	origin: "试_Originator____验",
    	pubdate: "试_Publication Date______验",
    	pubtime: "试_Publication Time______验",
    	title: "试_Title___验",
    	edition: "试_Edition___验",
    	geoform: {
    		caption: "试_Geospatial Data Presentation Form___________验",
    		atlas: "试_Atlas___验",
    		audio: "试_Audio___验",
    		diagram: "试_Diagram___验",
    		sDocument: "试_Document___验",
    		globe: "试_Globe___验",
    		map: "试_Map__验",
    		model: "试_Model___验",
    		multiMediaPresentation: "试_Multimedia presentation________验",
    		profile: "试_Profile___验",
    		rasterDigitalData: "试_Raster digital data_______验",
    		remoteSensingImage: "试_Remote-sensing image_______验",
    		section: "试_Section___验",
    		spreadsheet: "试_Spreadsheet____验",
    		tabularDigitalData: "试_Tabular digital data_______验",
    		vectorDigitalData: "试_Vector digital data_______验",
    		video: "试_Video___验",
    		view: "试_View__验"
    	},
    	serinfo: {
    		caption: "试_Series Information______验",
    		sername: "试_Series Name____验",
    		issue: "试_Issue Identification_______验"
    	},
    	pubinfo: {
    		caption: "试_Publication Information________验",
    		pubplace: "试_Publication Place______验",
    		publish: "试_Publisher____验"
    	},
    	othercit: "试_Other Citation Details________验",
    	onlink: "试_Online Linkage (URL)_______验"
    },
    
    cntinfo: {
    	caption: "试_Contact Information_______验",
    	section: {
    		primary: "试_Primary___验",
    		phoneAndEmail: "试_Phone and E-Mail______验",
    		hoursAndInstructions: "试_Hours and Instructions________验"
    	},
    	cntorgp: {
    		caption: "试_By organization______验",
    		cntorg: "试_Organization_____验",
    		cntper: "试_Person___验"
    	},
    	cntperp: {
    		caption: "试_By person____验",
    		cntper: "试_Person___验",
    		cntorg: "试_Organization_____验"
    	},
    	cntpos: "试_Position___验",
    	cntaddr: {
    		caption: "试_Address___验",
    		addrtype: {
    			caption: "试_Address Type_____验",
    			mailing: "试_Mailing___验",
    			physical: "试_Physical___验",
    			mailingAndPhysical: "试_Mailing and Physical_______验"
    		},
    		address: "试_Address___验",
    		city: "试_City__验",
    		state: "试_State___验",
    		postal: "试_Postal Code____验",
    		country: "试_Country___验"
    	},
    	cntvoice: "试_Voice___验",
    	cnttdd: "试_TDD/TTY Telephone (hearing impaired)____________验",
    	cntfax: "试_Fax__验",
    	cntemail: "试_E-Mail Address_____验",
    	hours: "试_Hours___验",
    	cntinst: "试_Instructions_____验"
    },
    
    dataqual: {
    	caption: "试_Data Quality Information________验",
    	section: {
    		attributeAccuracy: "试_Attribute Accuracy______验",
    		logicalConsistency: "试_Logical Consistency_______验",
    		completeness: "试_Completeness_____验",
    		positionalAccuracy: "试_Positional Accuracy_______验",
    		lineage: "试_Lineage___验",
    		cloudCover: "试_Cloud Cover____验"
    	},
    	attracc: {
    		caption: "试_Attribute Accuracy______验",
    		attraccr: "试_Attribute Accuracy Report_________验",
    		qattracc: {
    			caption: "试_Quantitative Attribute Accuracy Assessment______________验",
    			attraccv: "试_Attribute Accuracy Value________验",
    			attracce: "试_Attribute Accuracy Explanation__________验"
    		}
    	},
    	logic: "试_Logical Consistency Report_________验",
    	complete: "试_Completeness Report_______验",
    	posacc: "试_Positional Accuracy_______验",
    	horizpa: {
    		caption: "试_Horizontal Positional Accuracy__________验",
    		horizpar: "试_Horizontal Positional Accuracy Report____________验",
    		qhorizpa: {
    			caption: "试_Quantitative Horizontal Positional Accuracy Assessment_________________验",
    			horizpav: "试_Horizontal Positional Accuracy Value____________验",
    			horizpae: "试_Horizontal Positional Accuracy Explanation______________验"
    		}
    	},
    	vertacc: {
    		caption: "试_Vertical Positional Accuracy_________验",
    		vertaccr: "试_Vertical Positional Accuracy Report____________验",
    		qvertpa: {
    			caption: "试_Quantitative Vertical Positional Accuracy Assessment_________________验",
    			vertaccv: "试_Vertical Positional Accuracy Value___________验",
    			vertacce: "试_Vertical Positional Accuracy Explanation_____________验"
    		}
    	},
    	lineage: {
    		caption: "试_Lineage___验"
    	},
    	srcinfo: {
    		caption: "试_Source Information______验",
    		srccite: "试_Source Citation______验",
    		srcscale: "试_Source Scale Denominator________验",
    		typesrc: {
    			caption: "试_Type of Source Media_______验",
    			paper: "试_Paper___验",
    			stableBaseMaterial: "试_Stable-base material_______验",
    			microfiche: "试_Microfiche____验",
    			microfilm: "试_Microfilm____验",
    			audiocassette: "试_Audio cassette_____验",
    			chart: "试_Chart___验",
    			filmstrip: "试_Film strip____验",
    			transparency: "试_Transparency_____验",
    			videocassette: "试_Video cassette_____验",
    			videodisc: "试_Video disc____验",
    			videotape: "试_Video tape____验",
    			physicalModel: "试_Physical model_____验",
    			computerProgram: "试_Computer program______验",
    			disc: "试_Disc__验",
    			cartridgeTape: "试_Cartridge tape_____验",
    			magneticTape: "试_Magnetic tape_____验",
    			online: "试_Online___验",
    			cdrom: "试_CD-ROM___验",
    			electronicBulletinBoard: "试_Electronic bulletin board_________验",
    			electronicMailSystem: "试_Electronic mail system________验"
    		},
    		srctime: "试_Source Time Period of Content__________验",
    		srccurr: "试_Source Currentness Reference_________验",
    		srccitea: "试_Source Citation Abbreviation_________验",
    		srccontr: "试_Source Contribution_______验"
    	},
    	procstep: {
    		caption: "试_Process Step_____验",
    		procdesc: "试_Process Description_______验",
    		srcused: "试_Source Used Citation Abbreviation___________验",
    		procdate: "试_Process Date_____验",
    		proctime: "试_Process Time_____验",
    		srcprod: "试_Source Produced Citation Abbreviation____________验",
    		proccont: "试_Process Contact______验"
    	},
    	cloud: "试_Cloud Cover____验"
    },
    
    distinfo: {
    	caption: "试_Distribution Information________验",
    	section: {
    		distributor: "试_Distributor____验",
    		description: "试_Description____验",
    		orderProcess: "试_Order Process_____验",
    		prerequisites: "试_Prerequisites_____验",
    		availability: "试_Availability_____验"
    	},
    	distrib: "试_Distributor____验",
    	resdesc: {
    		caption: "试_Resource Description_______验",
    		liveData: "试_Live Data and Maps______验",
    		downloadableData: "试_Downloadable Data______验",
    		offlineData: "试_Offline Data_____验",
    		staticMapImages: "试_Static Map Images______验",
    		sDocument: "试_Other Documents______验",
    		application: "试_Applications_____验",
    		geographicService: "试_Geographic Services_______验",
    		clearingHouse: "试_Clearinghouses_____验",
    		mapFiles: "试_Map Files____验",
    		geographicActivies: "试_Geographic Activities_______验"
    	},
    	distliab: "试_Distribution Liability Statement___________验",
    	custom: "试_Custom Order Process_______验",
    	techpreq: "试_Technical Prerequisites________验",
    	availabl: "试_Availability_____验"
    },
    
    eainfo: {
    	caption: "试_Entity and Attribute Information___________验",
    	overview: "试_Overview Description_______验",
    	eaover: "试_Entity and Attribute Overview__________验",
    	eadetcit: "试_Entity and Attribute Detail Citation____________验"
    },
    
    idinfo: {
    	caption: "试_Identification Information_________验",
    	section: {
    		timeAndStatus: "试_Time and Status______验",
    		constraints: "试_Constraints____验",
    		contact: "试_Contact___验",
    		additional: "试_Additional____验"
    	},
    	citeinfo: "试_Citation___验",
    	descript: {
    		caption: "试_Description____验",
    		sAbstract: "试_Abstract___验",
    		purpose: "试_Purpose___验",
    		supplinf: "试_Supplemental Information________验"
    	},
    	timeperd: {
    		caption: "试_Time Period of Content________验",
    		current: {
    			caption: "试_Currentness Reference_______验",
    			groundCondition: "试_Ground Condition______验",
    			publicationDate: "试_Publication Date______验"
    		}
    	},
    	status: {
    		caption: "试_Status___验",
    		progress: {
    			caption: "试_Progress___验",
     			complete: "试_Complete___验",
    			inWork: "试_In work___验",
    			planned: "试_Planned___验"
    		},
    		update: {
    			caption: "试_Maintenance and Update Frequency___________验",
    			continual: "试_Continual____验",
    			daily: "试_Daily___验",
    			weekly: "试_Weekly___验",
    			monthly: "试_Monthly___验",
    			annually: "试_Annually___验",
    			unknown: "试_Unknown___验",
    			asNeeded: "试_As needed____验",
    			irregular: "试_Irregular____验",
    			nonePlanned: "试_None planned_____验"
    		}
    	},
    	spdom: {
    		caption: "试_Extent___验",
    		bounding: {
    			caption: "试_Bounding Coordinates_______验",
    			westbc: "试_West Bounding Longitude________验",
    			eastbc: "试_East Bounding Longitude________验",
    			northbc: "试_North Bounding Latitude________验",
    			southbc: "试_South Bounding Latitude________验"
    		}
    	},
      keywords: {
        caption: "关键字",
        theme: "主题",
        place: "地点",
        stratum: "地层",
        temporal: "时态",
        thesaursus: "关联主题词表",
        delimited: "关键字",
        themektIsoTopicCategory: "ISO 主题...",
        themektIsoTopicDialog: "ISO 主题",
        placektGnis: "地理名称信息系统"
      },
      accconst: "访问限制",
      useconst: "使用限制",
      ptcontac: "资源接触点",
      browse: {
      	caption: "试_Browse Graphic_____验",
      	browsen: "试_Browse Graphic URL______验",
      	browsed: "试_Browse Graphic File Description__________验",
      	browset: "试_Browse Graphic File Type________验"
      },
      datacred: "数据集可信度",
      secinfo: {
      	caption: "试_Security Information_______验",
      	secsys: "试_Security Classification System__________验",
      	secclass: {
      		caption: "试_Security Classification________验",
      		topSecret: "试_Top secret____验",
      		secret: "试_Secret___验",
      		confidential: "试_Confidential_____验",
      		restricted: "试_Restricted____验",
      		unclassified: "试_Unclassified_____验",
      		sensitive: "试_Sensitive____验"
      	},
      	sechandl: "试_Security Handling Description__________验"
      },
      sNative: "本地数据集环境",
      crossref: "交叉引用"
    },
    
    metadata: {
    	idinfo: "试_Identification_____验",
    	dataqual: "试_Quality___验",
    	spdoinfo: "试_Spatial Data Organization_________验",
    	spref: "试_Spatial Reference______验",
    	eainfo: "试_Entity and Attribute_______验",
    	distinfo: "试_Distribution_____验",
    	metainfo: "试_Metadata___验"
    },
    
    metainfo: {
    	caption: "试_Metadata Information_______验",
    	section: {
    		dates: "试_Metadata Dates_____验",
    		contact: "试_Metadata Contact______验",
    		standard: "试_Metadata Standard______验",
    		additional: "试_Additional____验"
    	},
      metd: "元数据日期",
      metrd: "元数据查看日期",
      metfrd: "元数据未来查看日期",
      metstdn: "元数据标准名称",
      metstdv: "元数据标准版",
      metac: "元数据访问限制",
      metuc: "元数据使用限制信息",
      metsi: {
      	caption: "试_Metadata Security Information__________验",
      	metscs: "试_Metadata Security Classification System_____________验",
      	metsc: "试_Metadata Security Classification___________验",
      	metshd: "试_Metadata Security Handling Description____________验"
      }
    },
    
    spref: {
    	caption: "试_Spatial Reference Information__________验",
    	horizsys: {
    		caption: "试_Horizontal Coordinate System_________验",
    		geograph: {
    			caption: "试_Geographic____验",
    			latres: "试_Latitude Resolution_______验",
    			longres: "试_Longitude Resolution_______验",
    			geogunit: {
    				caption: "试_Geographic Coordinate Units_________验",
    				decimalDegrees: "试_Decimal degrees______验",
    				decimalMinutes: "试_Decimal minutes______验",
    				decimalSeconds: "试_Decimal seconds______验",
    				degreesAndDecimalMinutes: "试_Degrees and decimal minutes_________验",
    				degreesMinutesAndDecimalSeconds: "试_Degrees, minutes, and decimal seconds____________验",
    				radians: "试_Radians___验",
    				grads: "试_Grads___验"
    			}
    		},
    		planar: {
    			caption: "试_Planar___验"
    		},
    		local: {
    			caption: "试_Local___验",
    			localdes: "试_Local Description______验",
    			localgeo: "试_Local Georeference Information__________验"
    		},
    		geodetic: {
    			caption: "试_Geodetic Model_____验",
    			horizdn: {
    				caption: "试_Horizontal Datum Name_______验",
    				nad83: "试_North American Datum of 1983_________验",
    				nad27: "试_North American Datum of 1927_________验"
    			},
    			ellips: {
    				caption: "试_Ellipsoid Name_____验",
    				grs80: "试_Geodetic Reference System 80_________验",
    				clarke1866: "试_Clarke 1866____验"
    			},
    			semiaxis: "试_Semi-major Axis______验",
    			denflat: "试_Denominator of Flattening Ratio__________验"
    		}
    	},
    	vertdef: {
    		caption: "试_Vertical Coordinate System_________验",
    		altsys: {
    			caption: "试_Altitude System______验",
    			altdatum: {
    				caption: "试_Altitude Datum Name_______验",
    				navd88: "试_North American Vertical Datum of 1988____________验",
    				ngvd29: "试_National Geodetic Vertical Datum of 1929_____________验"
    			},
    			altres: "试_Altitude Resolution_______验",
    			altunits: {
    				caption: "试_Altitude Distance Units________验",
    				meters: "试_Meters___验",
    				feet: "试_Feet__验"
    			},
    			altenc: {
    				caption: "试_Altitude Encoding Method________验",
    				explicit: "试_Explicit elevation coordinate included with horizontal coordinates_____________________验",
    				implicit: "试_Implicit coordinate_______验",
    				attribute: "试_Attribute values______验"
    			}
    		},
    		depthsys: {
    			caption: "试_Depth System_____验",
    			depthdn: {
    				caption: "试_Depth Datum Name______验",
    				option1: "试_Local surface_____验", 
    				option2: "试_Chart datum; datum for sounding reduction_____________验", 
    				option3: "试_Lowest astronomical tide________验", 
    				option4: "试_Highest astronomical tide_________验", 
    				option5: "试_Mean low water_____验", 
    				option6: "试_Mean high water______验", 
    				option7: "试_Mean sea level_____验", 
    				option8: "试_Land survey datum______验", 
    				option9: "试_Mean low water springs________验", 
    				option10: "试_Mean high water springs________验", 
    				option11: "试_Mean low water neap_______验", 
    				option12: "试_Mean high water neap_______验", 
    				option13: "试_Mean lower low water_______验", 
    				option14: "试_Mean lower low water springs_________验", 
    				option15: "试_Mean higher high water________验", 
    				option16: "试_Mean higher low water_______验", 
    				option17: "试_Mean lower high water_______验", 
    				option18: "试_Spring tide____验", 
    				option19: "试_Tropic lower low water________验", 
    				option20: "试_Neap tide____验", 
    				option21: "试_High water____验", 
    				option22: "试_Higher high water______验", 
    				option23: "试_Low water____验", 
    				option24: "试_Low-water datum______验", 
    				option25: "试_Lowest low water______验", 
    				option26: "试_Lower low water______验", 
    				option27: "试_Lowest normal low water________验", 
    				option28: "试_Mean tide level______验", 
    				option29: "试_Indian spring low water________验", 
    				option30: "试_High-water full and charge_________验", 
    				option31: "试_Low-water full and charge_________验", 
    				option32: "试_Columbia River datum_______验", 
    				option33: "试_Gulf Coast low water datum_________验", 
    				option34: "试_Equatorial springs low water_________验", 
    				option35: "试_Approximate lowest astronomical tide____________验", 
    				option36: "试_No correction_____验"
    			},
    			depthres: "试_Depth Resolution______验",
    			depthdu: {
    				caption: "试_Depth Distance Units_______验",
    				meters: "试_Meters___验",
    				feet: "试_Feet__验"
    			},   			
    			depthem: {
    				caption: "试_Depth Encoding Method_______验",
    				explicit: "试_Explicit depth coordinate included with horizontal coordinates____________________验",
    				implicit: "试_Implicit coordinate_______验",
    				attribute: "试_Attribute values______验"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "试_Time Period Information________验",
    	sngdate: "试_Single Date____验",
    	mdattim: "试_Multiple Dates_____验",
    	rngdates: "试_Date Range____验",
    	caldate: "试_Date__验",
    	time: "试_Time__验",
    	begdate: "试_Beginning Date_____验",
    	begtime: "试_Beginning Time_____验",
    	enddate: "试_Ending Date____验",
    	endtime: "试_Ending Time____验"
    }
   
  })
);
