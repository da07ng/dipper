define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "한_FGDC__빠",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "한_None__빠",
    	notComplete: "한_Not complete_____빠",
    	other: "한_Other___빠",
    	present: "한_Present___빠",
    	unknown: "한_Unknown___빠",
    	unpublishedMaterial: "한_Unpublished material_______빠"
    },
    
    hints: {
    	integerGreaterThanOne: "한_(enter an integer > 1)________빠",
    	integer0To100: "한_(enter an integer 0..100)_________빠"
    },
    
    citeinfo: {
    	caption: "한_Citation Information_______빠",
    	origin: "한_Originator____빠",
    	pubdate: "한_Publication Date______빠",
    	pubtime: "한_Publication Time______빠",
    	title: "한_Title___빠",
    	edition: "한_Edition___빠",
    	geoform: {
    		caption: "한_Geospatial Data Presentation Form___________빠",
    		atlas: "한_Atlas___빠",
    		audio: "한_Audio___빠",
    		diagram: "한_Diagram___빠",
    		sDocument: "한_Document___빠",
    		globe: "한_Globe___빠",
    		map: "한_Map__빠",
    		model: "한_Model___빠",
    		multiMediaPresentation: "한_Multimedia presentation________빠",
    		profile: "한_Profile___빠",
    		rasterDigitalData: "한_Raster digital data_______빠",
    		remoteSensingImage: "한_Remote-sensing image_______빠",
    		section: "한_Section___빠",
    		spreadsheet: "한_Spreadsheet____빠",
    		tabularDigitalData: "한_Tabular digital data_______빠",
    		vectorDigitalData: "한_Vector digital data_______빠",
    		video: "한_Video___빠",
    		view: "한_View__빠"
    	},
    	serinfo: {
    		caption: "한_Series Information______빠",
    		sername: "한_Series Name____빠",
    		issue: "한_Issue Identification_______빠"
    	},
    	pubinfo: {
    		caption: "한_Publication Information________빠",
    		pubplace: "한_Publication Place______빠",
    		publish: "한_Publisher____빠"
    	},
    	othercit: "한_Other Citation Details________빠",
    	onlink: "한_Online Linkage (URL)_______빠"
    },
    
    cntinfo: {
    	caption: "한_Contact Information_______빠",
    	section: {
    		primary: "한_Primary___빠",
    		phoneAndEmail: "한_Phone and E-Mail______빠",
    		hoursAndInstructions: "한_Hours and Instructions________빠"
    	},
    	cntorgp: {
    		caption: "한_By organization______빠",
    		cntorg: "한_Organization_____빠",
    		cntper: "한_Person___빠"
    	},
    	cntperp: {
    		caption: "한_By person____빠",
    		cntper: "한_Person___빠",
    		cntorg: "한_Organization_____빠"
    	},
    	cntpos: "한_Position___빠",
    	cntaddr: {
    		caption: "한_Address___빠",
    		addrtype: {
    			caption: "한_Address Type_____빠",
    			mailing: "한_Mailing___빠",
    			physical: "한_Physical___빠",
    			mailingAndPhysical: "한_Mailing and Physical_______빠"
    		},
    		address: "한_Address___빠",
    		city: "한_City__빠",
    		state: "한_State___빠",
    		postal: "한_Postal Code____빠",
    		country: "한_Country___빠"
    	},
    	cntvoice: "한_Voice___빠",
    	cnttdd: "한_TDD/TTY Telephone (hearing impaired)____________빠",
    	cntfax: "한_Fax__빠",
    	cntemail: "한_E-Mail Address_____빠",
    	hours: "한_Hours___빠",
    	cntinst: "한_Instructions_____빠"
    },
    
    dataqual: {
    	caption: "한_Data Quality Information________빠",
    	section: {
    		attributeAccuracy: "한_Attribute Accuracy______빠",
    		logicalConsistency: "한_Logical Consistency_______빠",
    		completeness: "한_Completeness_____빠",
    		positionalAccuracy: "한_Positional Accuracy_______빠",
    		lineage: "한_Lineage___빠",
    		cloudCover: "한_Cloud Cover____빠"
    	},
    	attracc: {
    		caption: "한_Attribute Accuracy______빠",
    		attraccr: "한_Attribute Accuracy Report_________빠",
    		qattracc: {
    			caption: "한_Quantitative Attribute Accuracy Assessment______________빠",
    			attraccv: "한_Attribute Accuracy Value________빠",
    			attracce: "한_Attribute Accuracy Explanation__________빠"
    		}
    	},
    	logic: "한_Logical Consistency Report_________빠",
    	complete: "한_Completeness Report_______빠",
    	posacc: "한_Positional Accuracy_______빠",
    	horizpa: {
    		caption: "한_Horizontal Positional Accuracy__________빠",
    		horizpar: "한_Horizontal Positional Accuracy Report____________빠",
    		qhorizpa: {
    			caption: "한_Quantitative Horizontal Positional Accuracy Assessment_________________빠",
    			horizpav: "한_Horizontal Positional Accuracy Value____________빠",
    			horizpae: "한_Horizontal Positional Accuracy Explanation______________빠"
    		}
    	},
    	vertacc: {
    		caption: "한_Vertical Positional Accuracy_________빠",
    		vertaccr: "한_Vertical Positional Accuracy Report____________빠",
    		qvertpa: {
    			caption: "한_Quantitative Vertical Positional Accuracy Assessment_________________빠",
    			vertaccv: "한_Vertical Positional Accuracy Value___________빠",
    			vertacce: "한_Vertical Positional Accuracy Explanation_____________빠"
    		}
    	},
    	lineage: {
    		caption: "한_Lineage___빠"
    	},
    	srcinfo: {
    		caption: "한_Source Information______빠",
    		srccite: "한_Source Citation______빠",
    		srcscale: "한_Source Scale Denominator________빠",
    		typesrc: {
    			caption: "한_Type of Source Media_______빠",
    			paper: "한_Paper___빠",
    			stableBaseMaterial: "한_Stable-base material_______빠",
    			microfiche: "한_Microfiche____빠",
    			microfilm: "한_Microfilm____빠",
    			audiocassette: "한_Audio cassette_____빠",
    			chart: "한_Chart___빠",
    			filmstrip: "한_Film strip____빠",
    			transparency: "한_Transparency_____빠",
    			videocassette: "한_Video cassette_____빠",
    			videodisc: "한_Video disc____빠",
    			videotape: "한_Video tape____빠",
    			physicalModel: "한_Physical model_____빠",
    			computerProgram: "한_Computer program______빠",
    			disc: "한_Disc__빠",
    			cartridgeTape: "한_Cartridge tape_____빠",
    			magneticTape: "한_Magnetic tape_____빠",
    			online: "한_Online___빠",
    			cdrom: "한_CD-ROM___빠",
    			electronicBulletinBoard: "한_Electronic bulletin board_________빠",
    			electronicMailSystem: "한_Electronic mail system________빠"
    		},
    		srctime: "한_Source Time Period of Content__________빠",
    		srccurr: "한_Source Currentness Reference_________빠",
    		srccitea: "한_Source Citation Abbreviation_________빠",
    		srccontr: "한_Source Contribution_______빠"
    	},
    	procstep: {
    		caption: "한_Process Step_____빠",
    		procdesc: "한_Process Description_______빠",
    		srcused: "한_Source Used Citation Abbreviation___________빠",
    		procdate: "한_Process Date_____빠",
    		proctime: "한_Process Time_____빠",
    		srcprod: "한_Source Produced Citation Abbreviation____________빠",
    		proccont: "한_Process Contact______빠"
    	},
    	cloud: "한_Cloud Cover____빠"
    },
    
    distinfo: {
    	caption: "한_Distribution Information________빠",
    	section: {
    		distributor: "한_Distributor____빠",
    		description: "한_Description____빠",
    		orderProcess: "한_Order Process_____빠",
    		prerequisites: "한_Prerequisites_____빠",
    		availability: "한_Availability_____빠"
    	},
    	distrib: "한_Distributor____빠",
    	resdesc: {
    		caption: "한_Resource Description_______빠",
    		liveData: "한_Live Data and Maps______빠",
    		downloadableData: "한_Downloadable Data______빠",
    		offlineData: "한_Offline Data_____빠",
    		staticMapImages: "한_Static Map Images______빠",
    		sDocument: "한_Other Documents______빠",
    		application: "한_Applications_____빠",
    		geographicService: "한_Geographic Services_______빠",
    		clearingHouse: "한_Clearinghouses_____빠",
    		mapFiles: "한_Map Files____빠",
    		geographicActivies: "한_Geographic Activities_______빠"
    	},
    	distliab: "한_Distribution Liability Statement___________빠",
    	custom: "한_Custom Order Process_______빠",
    	techpreq: "한_Technical Prerequisites________빠",
    	availabl: "한_Availability_____빠"
    },
    
    eainfo: {
    	caption: "한_Entity and Attribute Information___________빠",
    	overview: "한_Overview Description_______빠",
    	eaover: "한_Entity and Attribute Overview__________빠",
    	eadetcit: "한_Entity and Attribute Detail Citation____________빠"
    },
    
    idinfo: {
    	caption: "한_Identification Information_________빠",
    	section: {
    		timeAndStatus: "한_Time and Status______빠",
    		constraints: "한_Constraints____빠",
    		contact: "한_Contact___빠",
    		additional: "한_Additional____빠"
    	},
    	citeinfo: "한_Citation___빠",
    	descript: {
    		caption: "한_Description____빠",
    		sAbstract: "한_Abstract___빠",
    		purpose: "한_Purpose___빠",
    		supplinf: "한_Supplemental Information________빠"
    	},
    	timeperd: {
    		caption: "한_Time Period of Content________빠",
    		current: {
    			caption: "한_Currentness Reference_______빠",
    			groundCondition: "한_Ground Condition______빠",
    			publicationDate: "한_Publication Date______빠"
    		}
    	},
    	status: {
    		caption: "한_Status___빠",
    		progress: {
    			caption: "한_Progress___빠",
     			complete: "한_Complete___빠",
    			inWork: "한_In work___빠",
    			planned: "한_Planned___빠"
    		},
    		update: {
    			caption: "한_Maintenance and Update Frequency___________빠",
    			continual: "한_Continual____빠",
    			daily: "한_Daily___빠",
    			weekly: "한_Weekly___빠",
    			monthly: "한_Monthly___빠",
    			annually: "한_Annually___빠",
    			unknown: "한_Unknown___빠",
    			asNeeded: "한_As needed____빠",
    			irregular: "한_Irregular____빠",
    			nonePlanned: "한_None planned_____빠"
    		}
    	},
    	spdom: {
    		caption: "한_Extent___빠",
    		bounding: {
    			caption: "한_Bounding Coordinates_______빠",
    			westbc: "한_West Bounding Longitude________빠",
    			eastbc: "한_East Bounding Longitude________빠",
    			northbc: "한_North Bounding Latitude________빠",
    			southbc: "한_South Bounding Latitude________빠"
    		}
    	},
      keywords: {
        caption: "키워드",
        theme: "테마",
        place: "장소",
        stratum: "계층",
        temporal: "시간",
        thesaursus: "관련 동의어 사전",
        delimited: "키워드",
        themektIsoTopicCategory: "ISO 주제...",
        themektIsoTopicDialog: "ISO 주제",
        placektGnis: "지명 정보 시스템"
      },
      accconst: "액세스 제약",
      useconst: "사용 제약 조건",
      ptcontac: "리소스 연락 담당자",
      browse: {
      	caption: "한_Browse Graphic_____빠",
      	browsen: "한_Browse Graphic URL______빠",
      	browsed: "한_Browse Graphic File Description__________빠",
      	browset: "한_Browse Graphic File Type________빠"
      },
      datacred: "데이터셋 크레딧",
      secinfo: {
      	caption: "한_Security Information_______빠",
      	secsys: "한_Security Classification System__________빠",
      	secclass: {
      		caption: "한_Security Classification________빠",
      		topSecret: "한_Top secret____빠",
      		secret: "한_Secret___빠",
      		confidential: "한_Confidential_____빠",
      		restricted: "한_Restricted____빠",
      		unclassified: "한_Unclassified_____빠",
      		sensitive: "한_Sensitive____빠"
      	},
      	sechandl: "한_Security Handling Description__________빠"
      },
      sNative: "기본 데이터셋 환경",
      crossref: "상호 참조"
    },
    
    metadata: {
    	idinfo: "한_Identification_____빠",
    	dataqual: "한_Quality___빠",
    	spdoinfo: "한_Spatial Data Organization_________빠",
    	spref: "한_Spatial Reference______빠",
    	eainfo: "한_Entity and Attribute_______빠",
    	distinfo: "한_Distribution_____빠",
    	metainfo: "한_Metadata___빠"
    },
    
    metainfo: {
    	caption: "한_Metadata Information_______빠",
    	section: {
    		dates: "한_Metadata Dates_____빠",
    		contact: "한_Metadata Contact______빠",
    		standard: "한_Metadata Standard______빠",
    		additional: "한_Additional____빠"
    	},
      metd: "메타데이터 날짜",
      metrd: "메타데이터 검토 날짜",
      metfrd: "메타데이터 예정 검토 날짜",
      metstdn: "메타데이터 표준 이름",
      metstdv: "메타데이터 표준 버전",
      metac: "메타데이터 액세스 제약",
      metuc: "메타데이터 사용 제약",
      metsi: {
      	caption: "한_Metadata Security Information__________빠",
      	metscs: "한_Metadata Security Classification System_____________빠",
      	metsc: "한_Metadata Security Classification___________빠",
      	metshd: "한_Metadata Security Handling Description____________빠"
      }
    },
    
    spref: {
    	caption: "한_Spatial Reference Information__________빠",
    	horizsys: {
    		caption: "한_Horizontal Coordinate System_________빠",
    		geograph: {
    			caption: "한_Geographic____빠",
    			latres: "한_Latitude Resolution_______빠",
    			longres: "한_Longitude Resolution_______빠",
    			geogunit: {
    				caption: "한_Geographic Coordinate Units_________빠",
    				decimalDegrees: "한_Decimal degrees______빠",
    				decimalMinutes: "한_Decimal minutes______빠",
    				decimalSeconds: "한_Decimal seconds______빠",
    				degreesAndDecimalMinutes: "한_Degrees and decimal minutes_________빠",
    				degreesMinutesAndDecimalSeconds: "한_Degrees, minutes, and decimal seconds____________빠",
    				radians: "한_Radians___빠",
    				grads: "한_Grads___빠"
    			}
    		},
    		planar: {
    			caption: "한_Planar___빠"
    		},
    		local: {
    			caption: "한_Local___빠",
    			localdes: "한_Local Description______빠",
    			localgeo: "한_Local Georeference Information__________빠"
    		},
    		geodetic: {
    			caption: "한_Geodetic Model_____빠",
    			horizdn: {
    				caption: "한_Horizontal Datum Name_______빠",
    				nad83: "한_North American Datum of 1983_________빠",
    				nad27: "한_North American Datum of 1927_________빠"
    			},
    			ellips: {
    				caption: "한_Ellipsoid Name_____빠",
    				grs80: "한_Geodetic Reference System 80_________빠",
    				clarke1866: "한_Clarke 1866____빠"
    			},
    			semiaxis: "한_Semi-major Axis______빠",
    			denflat: "한_Denominator of Flattening Ratio__________빠"
    		}
    	},
    	vertdef: {
    		caption: "한_Vertical Coordinate System_________빠",
    		altsys: {
    			caption: "한_Altitude System______빠",
    			altdatum: {
    				caption: "한_Altitude Datum Name_______빠",
    				navd88: "한_North American Vertical Datum of 1988____________빠",
    				ngvd29: "한_National Geodetic Vertical Datum of 1929_____________빠"
    			},
    			altres: "한_Altitude Resolution_______빠",
    			altunits: {
    				caption: "한_Altitude Distance Units________빠",
    				meters: "한_Meters___빠",
    				feet: "한_Feet__빠"
    			},
    			altenc: {
    				caption: "한_Altitude Encoding Method________빠",
    				explicit: "한_Explicit elevation coordinate included with horizontal coordinates_____________________빠",
    				implicit: "한_Implicit coordinate_______빠",
    				attribute: "한_Attribute values______빠"
    			}
    		},
    		depthsys: {
    			caption: "한_Depth System_____빠",
    			depthdn: {
    				caption: "한_Depth Datum Name______빠",
    				option1: "한_Local surface_____빠", 
    				option2: "한_Chart datum; datum for sounding reduction_____________빠", 
    				option3: "한_Lowest astronomical tide________빠", 
    				option4: "한_Highest astronomical tide_________빠", 
    				option5: "한_Mean low water_____빠", 
    				option6: "한_Mean high water______빠", 
    				option7: "한_Mean sea level_____빠", 
    				option8: "한_Land survey datum______빠", 
    				option9: "한_Mean low water springs________빠", 
    				option10: "한_Mean high water springs________빠", 
    				option11: "한_Mean low water neap_______빠", 
    				option12: "한_Mean high water neap_______빠", 
    				option13: "한_Mean lower low water_______빠", 
    				option14: "한_Mean lower low water springs_________빠", 
    				option15: "한_Mean higher high water________빠", 
    				option16: "한_Mean higher low water_______빠", 
    				option17: "한_Mean lower high water_______빠", 
    				option18: "한_Spring tide____빠", 
    				option19: "한_Tropic lower low water________빠", 
    				option20: "한_Neap tide____빠", 
    				option21: "한_High water____빠", 
    				option22: "한_Higher high water______빠", 
    				option23: "한_Low water____빠", 
    				option24: "한_Low-water datum______빠", 
    				option25: "한_Lowest low water______빠", 
    				option26: "한_Lower low water______빠", 
    				option27: "한_Lowest normal low water________빠", 
    				option28: "한_Mean tide level______빠", 
    				option29: "한_Indian spring low water________빠", 
    				option30: "한_High-water full and charge_________빠", 
    				option31: "한_Low-water full and charge_________빠", 
    				option32: "한_Columbia River datum_______빠", 
    				option33: "한_Gulf Coast low water datum_________빠", 
    				option34: "한_Equatorial springs low water_________빠", 
    				option35: "한_Approximate lowest astronomical tide____________빠", 
    				option36: "한_No correction_____빠"
    			},
    			depthres: "한_Depth Resolution______빠",
    			depthdu: {
    				caption: "한_Depth Distance Units_______빠",
    				meters: "한_Meters___빠",
    				feet: "한_Feet__빠"
    			},   			
    			depthem: {
    				caption: "한_Depth Encoding Method_______빠",
    				explicit: "한_Explicit depth coordinate included with horizontal coordinates____________________빠",
    				implicit: "한_Implicit coordinate_______빠",
    				attribute: "한_Attribute values______빠"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "한_Time Period Information________빠",
    	sngdate: "한_Single Date____빠",
    	mdattim: "한_Multiple Dates_____빠",
    	rngdates: "한_Date Range____빠",
    	caldate: "한_Date__빠",
    	time: "한_Time__빠",
    	begdate: "한_Beginning Date_____빠",
    	begtime: "한_Beginning Time_____빠",
    	enddate: "한_Ending Date____빠",
    	endtime: "한_Ending Time____빠"
    }
   
  })
);
